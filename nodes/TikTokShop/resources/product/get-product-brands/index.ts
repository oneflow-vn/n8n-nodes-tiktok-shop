import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Get Product Brands'

const rawOption: INodePropertyOptions = {
  name: 'Get Product Brands',
  value: 'Get Product Brands',
  action: 'Get Product Brands',
  routing: {
    request: {
      method: 'GET',
      url: '=/api/products/brands',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
