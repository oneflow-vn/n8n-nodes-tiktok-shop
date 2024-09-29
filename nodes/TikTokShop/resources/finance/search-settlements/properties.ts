/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodeProperties } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

export const properties: INodeProperties[] = [
	{
		displayName: 'Cursor',
		default: '',
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Search Settlements'],
				resource: ['Business Finance'],
			},
		},
		name: 'cursor',
		routing: {
			request: {
				body: {
					cursor: '={{ $value }}',
				},
			},
		},
		type: 'string',
	},
	{
		displayName: 'Custom Body',
		default:
			'{\n  "request_time_from": 0,\n  "request_time_to": 0,\n  "page_size": 0,\n  "cursor": "string",\n  "sort_type": 0\n}',
		description: 'Custom body to send',
		displayOptions: {
			show: {
				'/options.useCustomBody': [true],
				operation: ['Search Settlements'],
				resource: ['Business Finance'],
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
		displayName: 'Page Size',
		default: 0,
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Search Settlements'],
				resource: ['Business Finance'],
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
		displayName: 'POST /api/finance/settlements/search',
		default: '',
		displayOptions: {
			show: {
				operation: ['Search Settlements'],
				resource: ['Business Finance'],
			},
		},
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
	},
	{
		displayName: 'Request Time From',
		default: 0,
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Search Settlements'],
				resource: ['Business Finance'],
			},
		},
		name: 'request_time_from',
		routing: {
			request: {
				body: {
					request_time_from: '={{ $value }}',
				},
			},
		},
		type: 'number',
	},
	{
		displayName: 'Request Time To',
		default: 0,
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Search Settlements'],
				resource: ['Business Finance'],
			},
		},
		name: 'request_time_to',
		routing: {
			request: {
				body: {
					request_time_to: '={{ $value }}',
				},
			},
		},
		type: 'number',
	},
	{
		displayName: 'Shop ID',
		default: '{{your shop id}}',
		description: undefined,
		displayOptions: {
			show: {
				operation: ['Search Settlements'],
				resource: ['Business Finance'],
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
		displayName: 'Sort Type',
		default: 0,
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Search Settlements'],
				resource: ['Business Finance'],
			},
		},
		name: 'sort_type',
		routing: {
			request: {
				body: {
					sort_type: '={{ $value }}',
				},
			},
		},
		type: 'number',
	},
	{
		displayName: 'Timestamp',
		default: '{{timestamp}}',
		description: undefined,
		displayOptions: {
			show: {
				operation: ['Search Settlements'],
				resource: ['Business Finance'],
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
