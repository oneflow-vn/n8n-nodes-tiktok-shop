import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Activate Product'

const rawOption: INodePropertyOptions = {
  name: 'Activate Product',
  value: 'Activate Product',
  action: 'Activate Product',
  routing: {
    request: {
      method: 'POST',
      url: '=/api/products/activate',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
