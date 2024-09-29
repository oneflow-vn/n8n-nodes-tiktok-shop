/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodePropertyOptions } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

import { properties as rawProperties } from './properties';
import runHooks from './hooks';

export const name = 'Edit Product';

const rawOption: INodePropertyOptions = {
	action: 'Edit Product',
	description: 'Edit Product',
	name: 'Edit Product',
	routing: {
		request: {
			method: 'PUT',
			url: '=/api/products',
		},
	},
	value: 'Edit Product',
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
