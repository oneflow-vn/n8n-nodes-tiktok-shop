import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Upload Image'

const rawOption: INodePropertyOptions = {
  name: 'Upload Image',
  value: 'Upload Image',
  action: 'Upload Image',
  routing: {
    request: {
      method: 'POST',
      url: '=/api/products/upload_imgs',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
