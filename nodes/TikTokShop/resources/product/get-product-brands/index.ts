/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodePropertyOptions } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

import { properties as rawProperties } from './properties';
import runHooks from './hooks';

export const name = 'Get Product Brands';

const rawOption: INodePropertyOptions = {
	action: 'Get Product Brands',
	description: 'Get Product Brands',
	name: 'Get Product Brands',
	routing: {
		request: {
			method: 'GET',
			url: '=/api/products/brands',
		},
	},
	value: 'Get Product Brands',
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
