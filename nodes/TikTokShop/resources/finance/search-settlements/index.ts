import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Search Settlements'

const rawOption: INodePropertyOptions = {
  name: 'Search Settlements',
  value: 'Search Settlements',
  action: 'Search Settlements',
  routing: {
    request: {
      method: 'POST',
      url: '=/api/finance/settlements/search',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
