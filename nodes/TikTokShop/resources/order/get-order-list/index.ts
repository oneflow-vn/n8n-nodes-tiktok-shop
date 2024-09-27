import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Get Order List'

const rawOption: INodePropertyOptions = {
  name: 'Get Order List',
  value: 'Get Order List',
  action: 'Get Order List',
  routing: {
    request: {
      method: 'POST',
      url: '=/api/orders/search',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
