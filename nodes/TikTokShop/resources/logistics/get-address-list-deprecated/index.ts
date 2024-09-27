import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Get Address List deprecated'

const rawOption: INodePropertyOptions = {
  name: 'Get Address List deprecated',
  value: 'Get Address List deprecated',
  action: 'Get Address List (deprecated)',
  routing: {
    request: {
      method: 'GET',
      url: '=/api/logistics/addresses',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
