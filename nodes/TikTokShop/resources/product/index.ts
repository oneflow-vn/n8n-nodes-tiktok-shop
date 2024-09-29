/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
// eslint-disable n8n-nodes-base/node-param-display-name-miscased-id

import { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import runHooks from './hooks';

import * as getProductCategories from './get-product-categories';
import * as getPorudctAttributes from './get-porudct-attributes';
import * as getProductCategoryRules from './get-product-category-rules';
import * as getProductBrands from './get-product-brands';
import * as uploadImage from './upload-image';
import * as uploadFile from './upload-file';
import * as createProduct from './create-product';
import * as editProduct from './edit-product';
import * as deleteProducts from './delete-products';
import * as getProductList from './get-product-list';
import * as getProductDetail from './get-product-detail';
import * as updatePrice from './update-price';
import * as updateStock from './update-stock';
import * as deactivateProducts from './deactivate-products';
import * as activateProduct from './activate-product';
import * as recoverProduct from './recover-product';

const operations: INodePropertyOptions[] = [
	getProductCategories.option,
	getPorudctAttributes.option,
	getProductCategoryRules.option,
	getProductBrands.option,
	uploadImage.option,
	uploadFile.option,
	createProduct.option,
	editProduct.option,
	deleteProducts.option,
	getProductList.option,
	getProductDetail.option,
	updatePrice.option,
	updateStock.option,
	deactivateProducts.option,
	activateProduct.option,
	recoverProduct.option,
];

export const name = 'Product';

const operationSelect: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['Business Product'],
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
	...getProductCategories.properties,
	...getPorudctAttributes.properties,
	...getProductCategoryRules.properties,
	...getProductBrands.properties,
	...uploadImage.properties,
	...uploadFile.properties,
	...createProduct.properties,
	...editProduct.properties,
	...deleteProducts.properties,
	...getProductList.properties,
	...getProductDetail.properties,
	...updatePrice.properties,
	...updateStock.properties,
	...deactivateProducts.properties,
	...activateProduct.properties,
	...recoverProduct.properties,
];

const { properties, methods } = runHooks(rawProperties);

export { properties, methods };
