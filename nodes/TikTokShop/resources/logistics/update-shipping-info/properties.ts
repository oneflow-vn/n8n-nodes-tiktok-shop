/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodeProperties } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

export const properties: INodeProperties[] = [
	{
		displayName: 'Custom Body',
		default:
			'{\n  "order_id": "string",\n  "tracking_number": "string",\n  "provider_id": "string"\n}',
		description: 'Custom body to send',
		displayOptions: {
			show: {
				'/options.useCustomBody': [true],
				operation: ['Update Shipping Info'],
				resource: ['Business Logistics'],
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
		displayName: 'Order ID',
		default: '',
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Update Shipping Info'],
				resource: ['Business Logistics'],
			},
		},
		name: 'order_id',
		routing: {
			request: {
				body: {
					order_id: '={{ $value }}',
				},
			},
		},
		type: 'string',
	},
	{
		displayName: 'POST /api/logistics/tracking',
		default: '',
		displayOptions: {
			show: {
				operation: ['Update Shipping Info'],
				resource: ['Business Logistics'],
			},
		},
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
	},
	{
		displayName: 'Provider ID',
		default: '',
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Update Shipping Info'],
				resource: ['Business Logistics'],
			},
		},
		name: 'provider_id',
		routing: {
			request: {
				body: {
					provider_id: '={{ $value }}',
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
				operation: ['Update Shipping Info'],
				resource: ['Business Logistics'],
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
				operation: ['Update Shipping Info'],
				resource: ['Business Logistics'],
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
		displayName: 'Tracking Number',
		default: '',
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Update Shipping Info'],
				resource: ['Business Logistics'],
			},
		},
		name: 'tracking_number',
		routing: {
			request: {
				body: {
					tracking_number: '={{ $value }}',
				},
			},
		},
		type: 'string',
	},
];
