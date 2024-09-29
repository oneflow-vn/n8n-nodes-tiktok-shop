/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodePropertyOptions } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

import { properties as rawProperties } from './properties';
import runHooks from './hooks';

export const name = 'Get Order Settlements';

const rawOption: INodePropertyOptions = {
	action: 'Get Order Settlements',
	description: 'Get Order Settlements',
	name: 'Get Order Settlements',
	routing: {
		request: {
			method: 'GET',
			url: '=/api/finance/order/settlements',
		},
	},
	value: 'Get Order Settlements',
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
