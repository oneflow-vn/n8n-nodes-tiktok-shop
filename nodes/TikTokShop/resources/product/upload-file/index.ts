import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Upload File'

const rawOption: INodePropertyOptions = {
  name: 'Upload File',
  value: 'Upload File',
  action: 'Upload File',
  routing: {
    request: {
      method: 'POST',
      url: '=/api/products/upload_files',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
