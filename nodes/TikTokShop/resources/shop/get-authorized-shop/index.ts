/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodePropertyOptions } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

import { properties as rawProperties } from './properties';
import runHooks from './hooks';

export const name = 'Get Authorized Shop';

const rawOption: INodePropertyOptions = {
	action: 'Get Authorized Shop',
	description: 'Get Authorized Shop',
	name: 'Get Authorized Shop',
	routing: {
		request: {
			method: 'GET',
			url: '=/api/shop/get_authorized_shop',
		},
	},
	value: 'Get Authorized Shop',
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
