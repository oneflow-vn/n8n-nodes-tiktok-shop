import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update Shipping Info'

const rawOption: INodePropertyOptions = {
  name: 'Update Shipping Info',
  value: 'Update Shipping Info',
  action: 'Update Shipping Info',
  routing: {
    request: {
      method: 'POST',
      url: '=/api/logistics/tracking',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
