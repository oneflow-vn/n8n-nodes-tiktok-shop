import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Get Product List'

const rawOption: INodePropertyOptions = {
  name: 'Get Product List',
  value: 'Get Product List',
  action: 'Get Product List',
  routing: {
    request: {
      method: 'POST',
      url: '=/api/products/search',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
