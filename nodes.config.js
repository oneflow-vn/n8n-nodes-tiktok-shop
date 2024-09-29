const path = require('path');

const credentials = [];

module.exports = {
	packageName: 'n8n-nodes-titkok-shop',
	credentials: {},
	nodes: {
		tiktokShop: {
			displayName: 'TikTok Shop',
			name: 'TikTokShop',
			description: 'TikTok Shop Management',
			openapi: path.resolve(__dirname, 'openapi.yml'),
			tags: [new RegExp('^Business.*')],
			icon: './icons/tiktokshop.svg',
			baseUrl: 'https://open-api.tiktokglobalshop.com',
			credentials,
		},
	},
	overwrites: {
		operations: [
			{
				match: {
					name: 'access_token',
				},
				set: false,
			},
			{
				match: {
					name: 'app_key',
				},
				set: false,
			},
			{
				match: {
					name: 'sign',
				},
				set: false,
			}
		],
	},
};
