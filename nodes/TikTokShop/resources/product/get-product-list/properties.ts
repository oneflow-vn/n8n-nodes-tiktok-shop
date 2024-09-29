/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodeProperties } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

export const properties: INodeProperties[] = [
	{
		displayName: 'Custom Body',
		default:
			'{\n  "page_size": 0,\n  "page_number": 0,\n  "search_status": 0,\n  "seller_sku_list": [\n    "string"\n  ]\n}',
		description: 'Custom body to send',
		displayOptions: {
			show: {
				'/options.useCustomBody': [true],
				operation: ['Get Product List'],
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
		displayName: 'Page Number',
		default: 0,
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Get Product List'],
				resource: ['Business Product'],
			},
		},
		name: 'page_number',
		routing: {
			request: {
				body: {
					page_number: '={{ $value }}',
				},
			},
		},
		type: 'number',
	},
	{
		displayName: 'Page Size',
		default: 0,
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Get Product List'],
				resource: ['Business Product'],
			},
		},
		name: 'page_size',
		routing: {
			request: {
				body: {
					page_size: '={{ $value }}',
				},
			},
		},
		type: 'number',
	},
	{
		displayName: 'POST /api/products/search',
		default: '',
		displayOptions: {
			show: {
				operation: ['Get Product List'],
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
		displayName: 'Search Status',
		default: 0,
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Get Product List'],
				resource: ['Business Product'],
			},
		},
		name: 'search_status',
		routing: {
			request: {
				body: {
					search_status: '={{ $value }}',
				},
			},
		},
		type: 'number',
	},
	{
		displayName: 'Seller Sku List',
		default: [],
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Get Product List'],
				resource: ['Business Product'],
			},
		},
		name: 'seller_sku_list',
		options: [
			{
				displayName: 'Items',
				name: 'items',
				values: [
					{
						displayName: 'Item',
						default: '',
						name: 'Item',
						type: 'string',
					},
				],
			},
		],
		placeholder: 'Add item',
		routing: {
			request: {
				body: {
					seller_sku_list: '={{$value.items}}',
				},
			},
		},
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
	},
	{
		displayName: 'Shop ID',
		default: '{{your shop id}}',
		description: undefined,
		displayOptions: {
			show: {
				operation: ['Get Product List'],
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
				operation: ['Get Product List'],
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
