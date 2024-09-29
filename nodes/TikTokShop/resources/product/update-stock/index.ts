/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodePropertyOptions } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

import { properties as rawProperties } from './properties';
import runHooks from './hooks';

export const name = 'Update Stock';

const rawOption: INodePropertyOptions = {
	action: 'Update Stock',
	description: 'Update Stock',
	name: 'Update Stock',
	routing: {
		request: {
			method: 'PUT',
			url: '=/api/products/stocks',
		},
	},
	value: 'Update Stock',
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
