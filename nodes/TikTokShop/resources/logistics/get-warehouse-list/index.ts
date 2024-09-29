/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodePropertyOptions } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

import { properties as rawProperties } from './properties';
import runHooks from './hooks';

export const name = 'Get Warehouse List';

const rawOption: INodePropertyOptions = {
	action: 'Get Warehouse List',
	description: 'Get Warehouse List',
	name: 'Get Warehouse List',
	routing: {
		request: {
			method: 'GET',
			url: '=/api/logistics/get_warehouse_list',
		},
	},
	value: 'Get Warehouse List',
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
