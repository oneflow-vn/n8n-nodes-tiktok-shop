import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Get Product Detail'

const rawOption: INodePropertyOptions = {
  name: 'Get Product Detail',
  value: 'Get Product Detail',
  action: 'Get Product Detail',
  routing: {
    request: {
      method: 'GET',
      url: '=/api/products/details',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
