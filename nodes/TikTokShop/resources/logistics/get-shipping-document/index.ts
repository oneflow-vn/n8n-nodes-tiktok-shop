import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Get Shipping Document'

const rawOption: INodePropertyOptions = {
  name: 'Get Shipping Document',
  value: 'Get Shipping Document',
  action: 'Get Shipping Document',
  routing: {
    request: {
      method: 'GET',
      url: '=/api/logistics/shipping_document',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
