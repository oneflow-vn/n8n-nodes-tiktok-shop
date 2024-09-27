import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Get Product Categories'

const rawOption: INodePropertyOptions = {
  name: 'Get Product Categories',
  value: 'Get Product Categories',
  action: 'Get Product Categories',
  routing: {
    request: {
      method: 'GET',
      url: '=/api/products/categories',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
