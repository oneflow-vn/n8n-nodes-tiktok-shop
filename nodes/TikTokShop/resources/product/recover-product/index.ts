import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Recover Product'

const rawOption: INodePropertyOptions = {
  name: 'Recover Product',
  value: 'Recover Product',
  action: 'Recover Product',
  routing: {
    request: {
      method: 'POST',
      url: '=/api/products/recover',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
