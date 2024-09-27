import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Edit Product'

const rawOption: INodePropertyOptions = {
  name: 'Edit Product',
  value: 'Edit Product',
  action: 'Edit Product',
  routing: {
    request: {
      method: 'PUT',
      url: '=/api/products',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
