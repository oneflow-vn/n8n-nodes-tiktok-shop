import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as getAuthorizedShop from './get-authorized-shop'

const operations: INodePropertyOptions[] = [getAuthorizedShop.option]

export const name = 'Shop'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Business Shop'],
    },
  },
  default: '',
}

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const rawProperties: INodeProperties[] = [
  operationSelect,
  ...getAuthorizedShop.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
