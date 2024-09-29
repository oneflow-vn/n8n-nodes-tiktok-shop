/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodeProperties } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

export const properties: INodeProperties[] = [
	{
		displayName: 'Custom Body',
		default: '{\n  "product_ids": [\n    "string"\n  ]\n}',
		description: 'Custom body to send',
		displayOptions: {
			show: {
				'/options.useCustomBody': [true],
				operation: ['Recover Product'],
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
		displayName: 'POST /api/products/recover',
		default: '',
		displayOptions: {
			show: {
				operation: ['Recover Product'],
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
		displayName: 'Product IDs',
		default: [],
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Recover Product'],
				resource: ['Business Product'],
			},
		},
		name: 'product_ids',
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
					product_ids: '={{$value.items}}',
				},
			},
		},
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
	},
	{
		displayName: 'Timestamp',
		default: '{{timestamp}}',
		description: undefined,
		displayOptions: {
			show: {
				operation: ['Recover Product'],
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
