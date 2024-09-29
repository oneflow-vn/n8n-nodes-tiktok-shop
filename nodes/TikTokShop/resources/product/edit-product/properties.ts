/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodeProperties } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

export const properties: INodeProperties[] = [
	{
		displayName: 'Code',
		default: 0,
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Edit Product'],
				resource: ['Business Product'],
			},
		},
		name: 'code',
		routing: {
			request: {
				body: {
					code: '={{ $value }}',
				},
			},
		},
		type: 'number',
	},
	{
		displayName: 'Custom Body',
		default:
			'{\n  "code": 0,\n  "message": "string",\n  "request_id": "string",\n  "data": {\n    "product_id": "string",\n    "skus": [\n      {\n        "id": "string",\n        "seller_sku": "string",\n        "sales_attributes": [\n          {\n            "attribute_id": "string",\n            "value_id": "string"\n          }\n        ]\n      }\n    ]\n  }\n}',
		description: 'Custom body to send',
		displayOptions: {
			show: {
				'/options.useCustomBody': [true],
				operation: ['Edit Product'],
				resource: ['Business Product'],
			},
		},
		name: 'customBody',
		routing: {
			send: {
				preSend: [helpers.hooks.preSendActionCustonBody],
			},
		},
		type: 'json',
	},
	{
		displayName: 'Data',
		default:
			'{\n  "skus": [\n    {\n      "sales_attributes": [\n        {}\n      ]\n    }\n  ]\n}',
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Edit Product'],
				resource: ['Business Product'],
			},
		},
		name: 'data',
		routing: {
			request: {
				body: {
					data: '={{ JSON.parse($value) }}',
				},
			},
		},
		type: 'json',
	},
	{
		displayName: 'Message',
		default: '',
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Edit Product'],
				resource: ['Business Product'],
			},
		},
		name: 'message',
		routing: {
			request: {
				body: {
					message: '={{ $value }}',
				},
			},
		},
		type: 'string',
	},
	{
		displayName: 'PUT /api/products',
		default: '',
		displayOptions: {
			show: {
				operation: ['Edit Product'],
				resource: ['Business Product'],
			},
		},
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
	},
	{
		displayName: 'Request ID',
		default: '',
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Edit Product'],
				resource: ['Business Product'],
			},
		},
		name: 'request_id',
		routing: {
			request: {
				body: {
					request_id: '={{ $value }}',
				},
			},
		},
		type: 'string',
	},
	{
		displayName: 'Shop ID',
		default: '{{your shop id}}',
		description: undefined,
		displayOptions: {
			show: {
				operation: ['Edit Product'],
				resource: ['Business Product'],
			},
		},
		name: 'shop_id',
		routing: {
			request: {
				qs: {
					shop_id: '={{ $value }}',
				},
			},
		},
		type: 'string',
	},
	{
		displayName: 'Timestamp',
		default: '{{timestamp}}',
		description: undefined,
		displayOptions: {
			show: {
				operation: ['Edit Product'],
				resource: ['Business Product'],
			},
		},
		name: 'timestamp',
		routing: {
			request: {
				qs: {
					timestamp: '={{ $value }}',
				},
			},
		},
		type: 'string',
	},
];
