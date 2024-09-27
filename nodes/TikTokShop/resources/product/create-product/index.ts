import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create Product'

const rawOption: INodePropertyOptions = {
  name: 'Create Product',
  value: 'Create Product',
  action: 'Create Product',
  routing: {
    request: {
      method: 'POST',
      url: '=/api/products',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
