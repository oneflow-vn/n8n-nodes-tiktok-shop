/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodePropertyOptions } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

import { properties as rawProperties } from './properties';
import runHooks from './hooks';

export const name = 'Ship Order';

const rawOption: INodePropertyOptions = {
	action: 'Ship Order',
	description: 'Ship Order',
	name: 'Ship Order',
	routing: {
		request: {
			method: 'POST',
			url: '=/api/orders/rts',
		},
	},
	value: 'Ship Order',
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
