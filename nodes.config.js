const path = require('path');

const credentials = [];

module.exports = {
	packageName: 'n8n-nodes-larksuite',
	credentials: {
	},
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
		}
	}
};
