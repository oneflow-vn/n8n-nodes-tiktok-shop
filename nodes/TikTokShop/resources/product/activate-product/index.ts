/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodePropertyOptions } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

import { properties as rawProperties } from './properties';
import runHooks from './hooks';

export const name = 'Activate Product';

const rawOption: INodePropertyOptions = {
	action: 'Activate Product',
	description: 'Activate Product',
	name: 'Activate Product',
	routing: {
		request: {
			method: 'POST',
			url: '=/api/products/activate',
		},
	},
	value: 'Activate Product',
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
