import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Get Shipping Provider'

const rawOption: INodePropertyOptions = {
  name: 'Get Shipping Provider',
  value: 'Get Shipping Provider',
  action: 'Get Shipping Provider',
  routing: {
    request: {
      method: 'GET',
      url: '=/api/logistics/shipping_providers',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
