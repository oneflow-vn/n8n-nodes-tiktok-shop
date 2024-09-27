import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Get Authorized Shop'

const rawOption: INodePropertyOptions = {
  name: 'Get Authorized Shop',
  value: 'Get Authorized Shop',
  action: 'Get Authorized Shop',
  routing: {
    request: {
      method: 'GET',
      url: '=/api/shop/get_authorized_shop',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
