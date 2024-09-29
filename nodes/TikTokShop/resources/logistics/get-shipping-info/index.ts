/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodePropertyOptions } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

import { properties as rawProperties } from './properties';
import runHooks from './hooks';

export const name = 'Get Shipping Info';

const rawOption: INodePropertyOptions = {
	action: 'Get Shipping Info',
	description: 'Get Shipping Info',
	name: 'Get Shipping Info',
	routing: {
		request: {
			method: 'GET',
			url: '=/api/logistics/ship/get',
		},
	},
	value: 'Get Shipping Info',
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
