import type {
	// IAuthenticateGeneric,
	ICredentialDataDecryptedObject,
	ICredentialTestRequest,
	ICredentialType,
	IHttpRequestHelper,
	IHttpRequestOptions,
	INodeProperties,
} from 'n8n-workflow';
import crypto from 'crypto';

type ITiktokShopApiCredentials = {
	appId: string;
	appSecret: string;
	shopId: string;
	accessToken: string;
};

export class TiktokShopApi implements ICredentialType {
	name = 'tiktokShopApi';

	displayName = 'TikTok Shop API';

	documentationUrl =
		'https://partner.tiktokshop.com/doc/page/63fd743c715d622a338c4e5d';

	properties: INodeProperties[] = [
		{
			displayName: 'App Key',
			name: 'appKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
		{
			displayName: 'App Secret',
			name: 'appSecret',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
		{
			displayName: 'Shop ID',
			name: 'shopId',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'hidden',
			default: '',
			typeOptions: {
				expirable: true,
			},
		},
	];

	async authenticate(
		credentials: ICredentialDataDecryptedObject,
		requestOptions: IHttpRequestOptions,
	): Promise<IHttpRequestOptions> {
		//check whether the token is an API Key or an access token
		const { tenantAccessToken } = credentials as ITiktokShopApiCredentials;

		// set the Authorization header
		if (requestOptions.headers) {
			requestOptions.headers['Authorization'] = `Bearer ${tenantAccessToken}`;
		}

		return requestOptions;
	}

	async preAuthentication(this: IHttpRequestHelper, credentials: ICredentialDataDecryptedObject) {
		const { tenant_access_token } = (await this.helpers.httpRequest({
			method: 'POST',
			url: `https://open.larksuite.com/open-apis/auth/v3/tenant_access_token/internal`,
			body: {
				app_id: credentials.appId,
				app_secret: credentials.appSecret,
			},
			headers: {
				'Content-Type': 'application/json',
			},
		})) as { tenant_access_token: string };

		// trim the token \s, \n, \r
		// t-g2069savYQEQMUPZBDUXN2JBSHAID6SAX5XUBS2F\r\n
		const tenantAccessToken = tenant_access_token.replace(/[\s\n\r]/g, '');

		return { tenantAccessToken };
	}

	test: ICredentialTestRequest = {
		request: {
			method: 'GET',
			url: 'https://open.larksuite.com/open-apis/tenant/v2/tenant/query',
		},
		rules: [
			{
				errorMessage: 'Authorization Error: Make sure to use the correct App ID and App Secret',
				type: 'responseCode',
				properties: {
					value: 200,
					message: '',
				},
			},
		],
	};
}

function generateSHA256(path, queries, secret) {
    // Step 1: Filter out 'access_token' and 'sign'
    const filteredQueries = Object.entries(queries).filter(([key]) => key !== 'access_token' && key !== 'sign');

    // Step 2: Sort the parameters alphabetically
    filteredQueries.sort(([keyA], [keyB]) => keyA.localeCompare(keyB));

    // Step 3: Create the base string
    let baseString = path;
    for (const [key, value] of filteredQueries) {
        baseString += key + value;
    }

    // Step 4: Wrap string with app_secret
    const inputString = secret + baseString + secret;

    // Step 5: Generate the HMAC-SHA256 signature
    const hmac = crypto.createHmac('sha256', secret);
    hmac.update(inputString);
    const signature = hmac.digest('hex');

    return signature;
}

