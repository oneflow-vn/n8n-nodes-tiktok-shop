import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Get Warehouse List'

const rawOption: INodePropertyOptions = {
  name: 'Get Warehouse List',
  value: 'Get Warehouse List',
  action: 'Get Warehouse List',
  routing: {
    request: {
      method: 'GET',
      url: '=/api/logistics/get_warehouse_list',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
