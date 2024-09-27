import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Get Shipping Info'

const rawOption: INodePropertyOptions = {
  name: 'Get Shipping Info',
  value: 'Get Shipping Info',
  action: 'Get Shipping Info',
  routing: {
    request: {
      method: 'GET',
      url: '=/api/logistics/ship/get',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
