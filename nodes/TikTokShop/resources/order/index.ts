import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as getOrderList from './get-order-list'
import * as getOrderDetail from './get-order-detail'
import * as shipOrder from './ship-order'

const operations: INodePropertyOptions[] = [
  getOrderList.option,
  getOrderDetail.option,
  shipOrder.option,
]

export const name = 'Order'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Business Order'],
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
  ...getOrderList.properties,
  ...getOrderDetail.properties,
  ...shipOrder.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
