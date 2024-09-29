/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodePropertyOptions } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

import { properties as rawProperties } from './properties';
import runHooks from './hooks';

export const name = 'Get Product List';

const rawOption: INodePropertyOptions = {
	action: 'Get Product List',
	description: 'Get Product List',
	name: 'Get Product List',
	routing: {
		request: {
			method: 'POST',
			url: '=/api/products/search',
		},
	},
	value: 'Get Product List',
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
