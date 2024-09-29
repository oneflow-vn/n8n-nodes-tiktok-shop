/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodePropertyOptions } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

import { properties as rawProperties } from './properties';
import runHooks from './hooks';

export const name = 'Get Shipping Provider';

const rawOption: INodePropertyOptions = {
	action: 'Get Shipping Provider',
	description: 'Get Shipping Provider',
	name: 'Get Shipping Provider',
	routing: {
		request: {
			method: 'GET',
			url: '=/api/logistics/shipping_providers',
		},
	},
	value: 'Get Shipping Provider',
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
