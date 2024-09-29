/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodeProperties } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

export const properties: INodeProperties[] = [
	{
		displayName: 'Address Type',
		default: 'address_type',
		description:
			'Use this field to specify the type of warehouse to obtain. Available value: SALES_WAREHOUSE/ RETURN_WAREHOUSE/ LOCAL_RETURN_WAREHOUSE.',
		displayOptions: {
			show: {
				operation: ['Get Address List Deprecated'],
				resource: ['Business Logistics'],
			},
		},
		name: 'address_type',
		routing: {
			request: {
				qs: {
					address_type: '={{ $value }}',
				},
			},
		},
		type: 'string',
	},
	{
		displayName: 'GET /api/logistics/addresses',
		default: '',
		displayOptions: {
			show: {
				operation: ['Get Address List Deprecated'],
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
		displayName: 'Shop ID',
		default: '{{your shop id}}',
		description: undefined,
		displayOptions: {
			show: {
				operation: ['Get Address List Deprecated'],
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
				operation: ['Get Address List Deprecated'],
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
];
