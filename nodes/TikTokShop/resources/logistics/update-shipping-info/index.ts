/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodePropertyOptions } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

import { properties as rawProperties } from './properties';
import runHooks from './hooks';

export const name = 'Update Shipping Info';

const rawOption: INodePropertyOptions = {
	action: 'Update Shipping Info',
	description: 'Update Shipping Info',
	name: 'Update Shipping Info',
	routing: {
		request: {
			method: 'POST',
			url: '=/api/logistics/tracking',
		},
	},
	value: 'Update Shipping Info',
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
