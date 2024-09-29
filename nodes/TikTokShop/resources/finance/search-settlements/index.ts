/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodePropertyOptions } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

import { properties as rawProperties } from './properties';
import runHooks from './hooks';

export const name = 'Search Settlements';

const rawOption: INodePropertyOptions = {
	action: 'Search Settlements',
	description: 'Search Settlements',
	name: 'Search Settlements',
	routing: {
		request: {
			method: 'POST',
			url: '=/api/finance/settlements/search',
		},
	},
	value: 'Search Settlements',
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
