/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodePropertyOptions } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

import { properties as rawProperties } from './properties';
import runHooks from './hooks';

export const name = 'Deactivate Products';

const rawOption: INodePropertyOptions = {
	action: 'Deactivate Products',
	description: 'Deactivate Products',
	name: 'Deactivate Products',
	routing: {
		request: {
			method: 'POST',
			url: '=/api/products/inactivated_products',
		},
	},
	value: 'Deactivate Products',
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
