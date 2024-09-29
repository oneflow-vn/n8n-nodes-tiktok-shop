/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodePropertyOptions } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

import { properties as rawProperties } from './properties';
import runHooks from './hooks';

export const name = 'Delete Products';

const rawOption: INodePropertyOptions = {
	action: 'Delete Products',
	description: 'Delete Products',
	name: 'Delete Products',
	routing: {
		request: {
			method: 'DELETE',
			url: '=/api/products',
		},
	},
	value: 'Delete Products',
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
