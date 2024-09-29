/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodeProperties } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

export const properties: INodeProperties[] = [
	{
		displayName: 'Custom Body',
		default: '{\n  "file_data": "string",\n  "file_name": "string"\n}',
		description: 'Custom body to send',
		displayOptions: {
			show: {
				'/options.useCustomBody': [true],
				operation: ['Upload File'],
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
		displayName: 'File Data',
		default: '',
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Upload File'],
				resource: ['Business Product'],
			},
		},
		name: 'file_data',
		routing: {
			request: {
				body: {
					file_data: '={{ $value }}',
				},
			},
		},
		type: 'string',
	},
	{
		displayName: 'File Name',
		default: '',
		description: undefined,
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				operation: ['Upload File'],
				resource: ['Business Product'],
			},
		},
		name: 'file_name',
		routing: {
			request: {
				body: {
					file_name: '={{ $value }}',
				},
			},
		},
		type: 'string',
	},
	{
		displayName: 'POST /api/products/upload_files',
		default: '',
		displayOptions: {
			show: {
				operation: ['Upload File'],
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
				operation: ['Upload File'],
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
