import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete Products'

const rawOption: INodePropertyOptions = {
  name: 'Delete Products',
  value: 'Delete Products',
  action: 'Delete Products',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/api/products',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
