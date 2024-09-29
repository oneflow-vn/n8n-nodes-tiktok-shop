/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodeProperties } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

export const properties: INodeProperties[] = [
	{
		displayName: 'GET /api/finance/order/settlements',
		default: '',
		displayOptions: {
			show: {
				operation: ['Get Order Settlements'],
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
		displayName: 'Order ID',
		default: 'order id',
		description: undefined,
		displayOptions: {
			show: {
				operation: ['Get Order Settlements'],
				resource: ['Business Finance'],
			},
		},
		name: 'order_id',
		routing: {
			request: {
				qs: {
					order_id: '={{ $value }}',
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
				operation: ['Get Order Settlements'],
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
		displayName: 'Timestamp',
		default: '{{timestamp}}',
		description: undefined,
		displayOptions: {
			show: {
				operation: ['Get Order Settlements'],
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
