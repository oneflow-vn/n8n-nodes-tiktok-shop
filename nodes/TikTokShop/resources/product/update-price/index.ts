/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodePropertyOptions } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

import { properties as rawProperties } from './properties';
import runHooks from './hooks';

export const name = 'Update Price';

const rawOption: INodePropertyOptions = {
	action: 'Update Price',
	description: 'Update Price',
	name: 'Update Price',
	routing: {
		request: {
			method: 'PUT',
			url: '=/api/products/prices',
		},
	},
	value: 'Update Price',
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
