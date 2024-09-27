import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Get Order Settlements'

const rawOption: INodePropertyOptions = {
  name: 'Get Order Settlements',
  value: 'Get Order Settlements',
  action: 'Get Order Settlements',
  routing: {
    request: {
      method: 'GET',
      url: '=/api/finance/order/settlements',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
