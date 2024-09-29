/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodeProperties } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

export const properties: INodeProperties[] = [
	{
		displayName: 'Document Size',
		default: 'document_size',
		description:
			'Use this field to specify the size of document to obtain. Available value: A6/A5. A6 by default.',
		displayOptions: {
			show: {
				operation: ['Get Shipping Document'],
				resource: ['Business Logistics'],
			},
		},
		name: 'document_size',
		routing: {
			request: {
				qs: {
					document_size: '={{ $value }}',
				},
			},
		},
		type: 'string',
	},
	{
		displayName: 'Document Type',
		default: 'document type',
		description: `Use this field to specify the type of document to obtain. Available value: SHIPPING_LABEL/ PICK_LIST/ SL_PL
SL_PL is to print both SHIPPING_LABEL and PICK_LIST in one pdf.`,
		displayOptions: {
			show: {
				operation: ['Get Shipping Document'],
				resource: ['Business Logistics'],
			},
		},
		name: 'document_type',
		routing: {
			request: {
				qs: {
					document_type: '={{ $value }}',
				},
			},
		},
		type: 'string',
	},
	{
		displayName: 'GET /api/logistics/shipping_document',
		default: '',
		displayOptions: {
			show: {
				operation: ['Get Shipping Document'],
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
		displayName: 'Order ID',
		default: 'order id',
		description: undefined,
		displayOptions: {
			show: {
				operation: ['Get Shipping Document'],
				resource: ['Business Logistics'],
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
				operation: ['Get Shipping Document'],
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
				operation: ['Get Shipping Document'],
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
