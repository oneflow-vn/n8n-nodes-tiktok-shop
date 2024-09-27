import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Get Product Category Rules'

const rawOption: INodePropertyOptions = {
  name: 'Get Product Category Rules',
  value: 'Get Product Category Rules',
  action: 'Get Product Category Rules',
  routing: {
    request: {
      method: 'GET',
      url: '=/api/products/categories/rules',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
