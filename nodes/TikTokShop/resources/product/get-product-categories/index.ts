/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodePropertyOptions } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

import { properties as rawProperties } from './properties';
import runHooks from './hooks';

export const name = 'Get Product Categories';

const rawOption: INodePropertyOptions = {
	action: 'Get Product Categories',
	description: 'Get Product Categories',
	name: 'Get Product Categories',
	routing: {
		request: {
			method: 'GET',
			url: '=/api/products/categories',
		},
	},
	value: 'Get Product Categories',
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
