/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodeProperties } from 'n8n-workflow';
import { aggregateNodeMethods } from '../helpers/methods';
import runHooks from './hooks';

import * as product from './product';
import * as order from './order';
import * as logistics from './logistics';
import * as shop from './shop';
import * as finance from './finance';

const authenticationProperties: INodeProperties[] = [];

const resourceSelect: INodeProperties[] = [
	{
		displayName: 'Resource',
		default: 'Business Finance',
		name: 'resource',
		noDataExpression: true,
		options: [
			{
				name: 'Finance',
				value: 'Business Finance',
			},
			{
				name: 'Logistic',
				value: 'Business Logistics',
			},
			{
				name: 'Order',
				value: 'Business Order',
			},
			{
				name: 'Product',
				value: 'Business Product',
			},
			{
				name: 'Shop',
				value: 'Business Shop',
			},
		],
		type: 'options',
	},
];

const extraProperties: INodeProperties[] = [
	{
		displayName: 'Options',
		default: {},
		name: 'options',
		options: [
			{
				displayName: 'Use Custom Body',
				default: false,
				description: 'Whether to use a custom body',
				name: 'useCustomBody',
				type: 'boolean',
			},
		],
		placeholder: 'Add option',
		type: 'collection',
	},
];

const rawProperties: INodeProperties[] = [
	...authenticationProperties,
	...resourceSelect,
	...product.properties,
	...order.properties,
	...logistics.properties,
	...shop.properties,
	...finance.properties,
	...extraProperties,
];

const { properties, methods: selfMethods } = runHooks(rawProperties);

const methods = aggregateNodeMethods([
	selfMethods,
	product.methods,
	order.methods,
	logistics.methods,
	shop.methods,
	finance.methods,
]);

export { properties, methods };
