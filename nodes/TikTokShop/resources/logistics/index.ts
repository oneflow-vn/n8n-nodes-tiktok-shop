/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import runHooks from './hooks';

import * as getShippingInfo from './get-shipping-info';
import * as updateShippingInfo from './update-shipping-info';
import * as getShippingDocument from './get-shipping-document';
import * as getAddressListDeprecated from './get-address-list-deprecated';
import * as getWarehouseList from './get-warehouse-list';
import * as getShippingProvider from './get-shipping-provider';

const operations: INodePropertyOptions[] = [
	getShippingInfo.option,
	updateShippingInfo.option,
	getShippingDocument.option,
	getAddressListDeprecated.option,
	getWarehouseList.option,
	getShippingProvider.option,
];

export const name = 'Logistics';

const operationSelect: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['Business Logistics'],
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
	...getShippingInfo.properties,
	...updateShippingInfo.properties,
	...getShippingDocument.properties,
	...getAddressListDeprecated.properties,
	...getWarehouseList.properties,
	...getShippingProvider.properties,
];

const { properties, methods } = runHooks(rawProperties);

export { properties, methods };
