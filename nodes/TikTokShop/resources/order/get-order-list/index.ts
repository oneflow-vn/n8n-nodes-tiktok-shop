/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodePropertyOptions } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

import { properties as rawProperties } from './properties';
import runHooks from './hooks';

export const name = 'Get Order List';

const rawOption: INodePropertyOptions = {
	action: 'Get Order List',
	description: 'Get Order List',
	name: 'Get Order List',
	routing: {
		request: {
			method: 'POST',
			url: '=/api/orders/search',
		},
	},
	value: 'Get Order List',
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
