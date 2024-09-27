import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Get Porudct Attributes'

const rawOption: INodePropertyOptions = {
  name: 'Get Porudct Attributes',
  value: 'Get Porudct Attributes',
  action: 'Get Porudct Attributes',
  routing: {
    request: {
      method: 'GET',
      url: '=/api/products/attributes',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
