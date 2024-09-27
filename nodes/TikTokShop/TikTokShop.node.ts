import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './TikTokShop.properties'
import { methods } from './TikTokShop.methods'

export class TikTokShop implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'TikTok Shop',
    name: 'TikTokShop',
    icon: 'file:tiktokshop.svg',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'TikTok Shop Management',
    defaults: {
      name: 'TikTokShop',
    },
    inputs: ['main'],
    outputs: ['main'],
    credentials: [],
    requestDefaults: {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      baseURL: 'https://open-api.tiktokglobalshop.com',
    },
    properties: properties,
  }

  methods = methods
}
