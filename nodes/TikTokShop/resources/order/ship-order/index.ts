import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Ship Order'

const rawOption: INodePropertyOptions = {
  name: 'Ship Order',
  value: 'Ship Order',
  action: 'Ship Order',
  routing: {
    request: {
      method: 'POST',
      url: '=/api/orders/rts',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
