/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodePropertyOptions } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

import { properties as rawProperties } from './properties';
import runHooks from './hooks';

export const name = 'Create Product';

const rawOption: INodePropertyOptions = {
	action: 'Create Product',
	description: 'Create Product',
	name: 'Create Product',
	routing: {
		request: {
			method: 'POST',
			url: '=/api/products',
		},
	},
	value: 'Create Product',
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
