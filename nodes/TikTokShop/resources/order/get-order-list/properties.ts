/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodeProperties } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

export const properties: INodeProperties[] = [
	{
		displayName: 'Create Time From',
		default: 0,
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Get Order List'],
				resource: ['Business Order'],
			},
		},
		name: 'create_time_from',
		routing: {
			request: {
				body: {
					create_time_from: '={{ $value }}',
				},
			},
		},
		type: 'number',
	},
	{
		displayName: 'Create Time To',
		default: 0,
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Get Order List'],
				resource: ['Business Order'],
			},
		},
		name: 'create_time_to',
		routing: {
			request: {
				body: {
					create_time_to: '={{ $value }}',
				},
			},
		},
		type: 'number',
	},
	{
		displayName: 'Custom Body',
		default:
			'{\n  "create_time_from": 0,\n  "create_time_to": 0,\n  "update_time_from": 0,\n  "update_time_to": 0,\n  "sort_type": 0,\n  "sort_by": "string",\n  "page_size": 0\n}',
		description: 'Custom body to send',
		displayOptions: {
			show: {
				'/options.useCustomBody': [true],
				operation: ['Get Order List'],
				resource: ['Business Order'],
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
				operation: ['Get Order List'],
				resource: ['Business Order'],
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
		displayName: 'POST /api/orders/search',
		default: '',
		displayOptions: {
			show: {
				operation: ['Get Order List'],
				resource: ['Business Order'],
			},
		},
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
	},
	{
		displayName: 'Shop ID',
		default: '{{your shop id}}',
		description: undefined,
		displayOptions: {
			show: {
				operation: ['Get Order List'],
				resource: ['Business Order'],
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
		displayName: 'Sort By',
		default: '',
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Get Order List'],
				resource: ['Business Order'],
			},
		},
		name: 'sort_by',
		routing: {
			request: {
				body: {
					sort_by: '={{ $value }}',
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
				operation: ['Get Order List'],
				resource: ['Business Order'],
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
				operation: ['Get Order List'],
				resource: ['Business Order'],
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
	{
		displayName: 'Update Time From',
		default: 0,
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Get Order List'],
				resource: ['Business Order'],
			},
		},
		name: 'update_time_from',
		routing: {
			request: {
				body: {
					update_time_from: '={{ $value }}',
				},
			},
		},
		type: 'number',
	},
	{
		displayName: 'Update Time To',
		default: 0,
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Get Order List'],
				resource: ['Business Order'],
			},
		},
		name: 'update_time_to',
		routing: {
			request: {
				body: {
					update_time_to: '={{ $value }}',
				},
			},
		},
		type: 'number',
	},
];
