/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodeProperties } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

export const properties: INodeProperties[] = [
	{
		displayName: 'Custom Body',
		default: '{\n  "img_data": "string",\n  "img_scene": 0\n}',
		description: 'Custom body to send',
		displayOptions: {
			show: {
				'/options.useCustomBody': [true],
				operation: ['Upload Image'],
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
		displayName: 'Img Data',
		default: '',
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Upload Image'],
				resource: ['Business Product'],
			},
		},
		name: 'img_data',
		routing: {
			request: {
				body: {
					img_data: '={{ $value }}',
				},
			},
		},
		type: 'string',
	},
	{
		displayName: 'Img Scene',
		default: 0,
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Upload Image'],
				resource: ['Business Product'],
			},
		},
		name: 'img_scene',
		routing: {
			request: {
				body: {
					img_scene: '={{ $value }}',
				},
			},
		},
		type: 'number',
	},
	{
		displayName: 'POST /api/products/upload_imgs',
		default: '',
		displayOptions: {
			show: {
				operation: ['Upload Image'],
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
		displayName: 'Timestamp',
		default: '{{timestamp}}',
		description: undefined,
		displayOptions: {
			show: {
				operation: ['Upload Image'],
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
