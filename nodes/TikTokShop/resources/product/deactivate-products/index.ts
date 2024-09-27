import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Deactivate Products'

const rawOption: INodePropertyOptions = {
  name: 'Deactivate Products',
  value: 'Deactivate Products',
  action: 'Deactivate Products',
  routing: {
    request: {
      method: 'POST',
      url: '=/api/products/inactivated_products',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
