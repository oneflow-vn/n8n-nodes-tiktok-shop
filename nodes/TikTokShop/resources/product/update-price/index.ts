import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update Price'

const rawOption: INodePropertyOptions = {
  name: 'Update Price',
  value: 'Update Price',
  action: 'Update Price',
  routing: {
    request: {
      method: 'PUT',
      url: '=/api/products/prices',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
