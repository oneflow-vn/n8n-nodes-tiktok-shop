/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodeProperties } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

export const properties: INodeProperties[] = [
	{
		displayName: 'Category ID',
		default: 'category_id',
		description: 'Only support the input of leaf categories',
		displayOptions: {
			show: {
				operation: ['Get Product Category Rules'],
				resource: ['Business Product'],
			},
		},
		name: 'category_id',
		routing: {
			request: {
				qs: {
					category_id: '={{ $value }}',
				},
			},
		},
		type: 'string',
	},
	{
		displayName: 'GET /api/products/categories/rules',
		default: '',
		displayOptions: {
			show: {
				operation: ['Get Product Category Rules'],
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
		displayName: 'Shop ID',
		default: '{{your shop id}}',
		description: undefined,
		displayOptions: {
			show: {
				operation: ['Get Product Category Rules'],
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
				operation: ['Get Product Category Rules'],
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
