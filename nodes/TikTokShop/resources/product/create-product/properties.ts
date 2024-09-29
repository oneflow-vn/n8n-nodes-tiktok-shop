/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodeProperties } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

export const properties: INodeProperties[] = [
	{
		displayName: 'Brand ID',
		default: '',
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Create Product'],
				resource: ['Business Product'],
			},
		},
		name: 'brand_id',
		routing: {
			request: {
				body: {
					brand_id: '={{ $value }}',
				},
			},
		},
		type: 'string',
	},
	{
		displayName: 'Category ID',
		default: '',
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Create Product'],
				resource: ['Business Product'],
			},
		},
		name: 'category_id',
		routing: {
			request: {
				body: {
					category_id: '={{ $value }}',
				},
			},
		},
		type: 'string',
	},
	{
		displayName: 'Custom Body',
		default:
			'{\n  "product_name": "string",\n  "description": "string",\n  "category_id": "string",\n  "brand_id": "string",\n  "images": [\n    {\n      "id": "string"\n    }\n  ],\n  "warranty_period": 0,\n  "warranty_policy": "string",\n  "package_length": 0,\n  "package_width": 0,\n  "package_height": 0,\n  "package_weight": "string",\n  "product_certifications": [\n    {\n      "id": "string",\n      "files": [\n        {\n          "id": "string",\n          "name": "string",\n          "type": "string"\n        }\n      ],\n      "images": [\n        {\n          "id": "string"\n        }\n      ]\n    }\n  ],\n  "is_cod_open": true,\n  "skus": [\n    {\n      "sales_attributes": [\n        {}\n      ],\n      "stock_infos": [\n        {\n          "warehouse_id": "string",\n          "available_stock": 0\n        }\n      ],\n      "seller_sku": "string",\n      "original_price": "string"\n    }\n  ]\n}',
		description: 'Custom body to send',
		displayOptions: {
			show: {
				'/options.useCustomBody': [true],
				operation: ['Create Product'],
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
		displayName: 'Description',
		default: '',
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Create Product'],
				resource: ['Business Product'],
			},
		},
		name: 'description',
		routing: {
			request: {
				body: {
					description: '={{ $value }}',
				},
			},
		},
		type: 'string',
	},
	{
		displayName: 'Images',
		default: [],
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Create Product'],
				resource: ['Business Product'],
			},
		},
		name: 'images',
		options: [
			{
				displayName: 'Items',
				name: 'items',
				values: [
					{
						displayName: 'ID',
						default: '',
						description: undefined,
						name: 'id',
						type: 'string',
					},
				],
			},
		],
		placeholder: 'Add item',
		routing: {
			request: {
				body: {
					images: '={{$value.items}}',
				},
			},
		},
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
	},
	{
		displayName: 'Is Cod Open',
		default: true,
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Create Product'],
				resource: ['Business Product'],
			},
		},
		name: 'is_cod_open',
		routing: {
			request: {
				body: {
					is_cod_open: '={{ $value }}',
				},
			},
		},
		type: 'boolean',
	},
	{
		displayName: 'Package Height',
		default: 0,
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Create Product'],
				resource: ['Business Product'],
			},
		},
		name: 'package_height',
		routing: {
			request: {
				body: {
					package_height: '={{ $value }}',
				},
			},
		},
		type: 'number',
	},
	{
		displayName: 'Package Length',
		default: 0,
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Create Product'],
				resource: ['Business Product'],
			},
		},
		name: 'package_length',
		routing: {
			request: {
				body: {
					package_length: '={{ $value }}',
				},
			},
		},
		type: 'number',
	},
	{
		displayName: 'Package Weight',
		default: '',
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Create Product'],
				resource: ['Business Product'],
			},
		},
		name: 'package_weight',
		routing: {
			request: {
				body: {
					package_weight: '={{ $value }}',
				},
			},
		},
		type: 'string',
	},
	{
		displayName: 'Package Width',
		default: 0,
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Create Product'],
				resource: ['Business Product'],
			},
		},
		name: 'package_width',
		routing: {
			request: {
				body: {
					package_width: '={{ $value }}',
				},
			},
		},
		type: 'number',
	},
	{
		displayName: 'POST /api/products',
		default: '',
		displayOptions: {
			show: {
				operation: ['Create Product'],
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
		displayName: 'Product Certifications',
		default: [],
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Create Product'],
				resource: ['Business Product'],
			},
		},
		name: 'product_certifications',
		options: [
			{
				displayName: 'Items',
				name: 'items',
				values: [
					{
						displayName: 'Item',
						default: '{\n  "files": [\n    {}\n  ],\n  "images": [\n    {}\n  ]\n}',
						description: undefined,
						name: 'item',
						type: 'json',
					},
				],
			},
		],
		placeholder: 'Add item',
		routing: {
			request: {
				body: {
					product_certifications: '={{$value.items}}',
				},
			},
		},
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
	},
	{
		displayName: 'Product Name',
		default: '',
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Create Product'],
				resource: ['Business Product'],
			},
		},
		name: 'product_name',
		routing: {
			request: {
				body: {
					product_name: '={{ $value }}',
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
				operation: ['Create Product'],
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
		displayName: 'Skus',
		default: [],
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Create Product'],
				resource: ['Business Product'],
			},
		},
		name: 'skus',
		options: [
			{
				displayName: 'Items',
				name: 'items',
				values: [
					{
						displayName: 'Item',
						default:
							'{\n  "sales_attributes": [\n    null\n  ],\n  "stock_infos": [\n    {}\n  ]\n}',
						description: undefined,
						name: 'item',
						type: 'json',
					},
				],
			},
		],
		placeholder: 'Add item',
		routing: {
			request: {
				body: {
					skus: '={{$value.items}}',
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
				operation: ['Create Product'],
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
	{
		displayName: 'Warranty Period',
		default: 0,
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Create Product'],
				resource: ['Business Product'],
			},
		},
		name: 'warranty_period',
		routing: {
			request: {
				body: {
					warranty_period: '={{ $value }}',
				},
			},
		},
		type: 'number',
	},
	{
		displayName: 'Warranty Policy',
		default: '',
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Create Product'],
				resource: ['Business Product'],
			},
		},
		name: 'warranty_policy',
		routing: {
			request: {
				body: {
					warranty_policy: '={{ $value }}',
				},
			},
		},
		type: 'string',
	},
];
