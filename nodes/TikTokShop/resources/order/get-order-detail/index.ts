import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Get Order Detail'

const rawOption: INodePropertyOptions = {
  name: 'Get Order Detail',
  value: 'Get Order Detail',
  action: 'Get Order Detail',
  routing: {
    request: {
      method: 'POST',
      url: '=/api/orders/detail/query',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
