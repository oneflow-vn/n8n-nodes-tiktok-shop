/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodePropertyOptions } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

import { properties as rawProperties } from './properties';
import runHooks from './hooks';

export const name = 'Get Address List Deprecated';

const rawOption: INodePropertyOptions = {
	action: 'Get Address List (deprecated)',
	description: 'Get Address List (deprecated)',
	name: 'Get Address List Deprecated',
	routing: {
		request: {
			method: 'GET',
			url: '=/api/logistics/addresses',
		},
	},
	value: 'Get Address List Deprecated',
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
