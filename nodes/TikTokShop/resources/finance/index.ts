/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import runHooks from './hooks';

import * as searchSettlements from './search-settlements';
import * as getOrderSettlements from './get-order-settlements';

const operations: INodePropertyOptions[] = [searchSettlements.option, getOrderSettlements.option];

export const name = 'Finance';

const operationSelect: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['Business Finance'],
		},
	},
	default: '',
};

// overwrite the options of the operationSelect
operationSelect.options = operations;

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : '';

export const rawProperties: INodeProperties[] = [
	operationSelect,
	...searchSettlements.properties,
	...getOrderSettlements.properties,
];

const { properties, methods } = runHooks(rawProperties);

export { properties, methods };
