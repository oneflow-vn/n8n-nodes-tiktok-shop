import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update Stock'

const rawOption: INodePropertyOptions = {
  name: 'Update Stock',
  value: 'Update Stock',
  action: 'Update Stock',
  routing: {
    request: {
      method: 'PUT',
      url: '=/api/products/stocks',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
