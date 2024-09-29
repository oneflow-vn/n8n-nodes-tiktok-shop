/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodePropertyOptions } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

import { properties as rawProperties } from './properties';
import runHooks from './hooks';

export const name = 'Get Porudct Attributes';

const rawOption: INodePropertyOptions = {
	action: 'Get Porudct Attributes',
	description: 'Get Porudct Attributes',
	name: 'Get Porudct Attributes',
	routing: {
		request: {
			method: 'GET',
			url: '=/api/products/attributes',
		},
	},
	value: 'Get Porudct Attributes',
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
