import { INodeProperties } from 'n8n-workflow'
import { aggregateNodeMethods } from '../helpers/methods'
import runHooks from './hooks'

import * as product from './product'
import * as order from './order'
import * as logistics from './logistics'
import * as shop from './shop'
import * as finance from './finance'

const authenticationProperties: INodeProperties[] = [
  {
    displayName: 'Authentication',
    name: 'authentication',
    type: 'options',
    options: [],
    default: '',
  },
]

const resourceSelect: INodeProperties[] = [
  {
    displayName: 'Resource',
    name: 'resource',
    type: 'options',
    noDataExpression: true,
    options: [
      {
        name: 'Product',
        value: 'Business Product',
      },
      {
        name: 'Order',
        value: 'Business Order',
      },
      {
        name: 'Logistics',
        value: 'Business Logistics',
      },
      {
        name: 'Shop',
        value: 'Business Shop',
      },
      {
        name: 'Finance',
        value: 'Business Finance',
      },
    ],
    default: '',
  },
]

const rawProperties: INodeProperties[] = [
  ...authenticationProperties,
  ...resourceSelect,
  ...product.properties,
  ...order.properties,
  ...logistics.properties,
  ...shop.properties,
  ...finance.properties,
]

const { properties, methods: selfMethods } = runHooks(rawProperties)

const methods = aggregateNodeMethods([
  selfMethods,
  product.methods,
  order.methods,
  logistics.methods,
  shop.methods,
  finance.methods,
])

export { properties, methods }
