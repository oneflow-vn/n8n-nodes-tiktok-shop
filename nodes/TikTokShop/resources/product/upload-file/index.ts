/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodePropertyOptions } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

import { properties as rawProperties } from './properties';
import runHooks from './hooks';

export const name = 'Upload File';

const rawOption: INodePropertyOptions = {
	action: 'Upload File',
	description: 'Upload File',
	name: 'Upload File',
	routing: {
		request: {
			method: 'POST',
			url: '=/api/products/upload_files',
		},
	},
	value: 'Upload File',
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
