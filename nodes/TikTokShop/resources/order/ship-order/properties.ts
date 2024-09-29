/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodeProperties } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

export const properties: INodeProperties[] = [
	{
		displayName: 'Custom Body',
		default: '{\n  "order_id": "string"\n}',
		description: 'Custom body to send',
		displayOptions: {
			show: {
				'/options.useCustomBody': [true],
				operation: ['Ship Order'],
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
		displayName: 'Order ID',
		default: '',
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Ship Order'],
				resource: ['Business Order'],
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
		displayName: 'POST /api/orders/rts',
		default: '',
		displayOptions: {
			show: {
				operation: ['Ship Order'],
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
				operation: ['Ship Order'],
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
		displayName: 'Timestamp',
		default: '{{timestamp}}',
		description: undefined,
		displayOptions: {
			show: {
				operation: ['Ship Order'],
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
];
