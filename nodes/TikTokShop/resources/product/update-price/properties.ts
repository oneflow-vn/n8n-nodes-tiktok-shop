import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'PUT /api/products/prices',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Update Price'],
      },
    },
  },
  {
    displayName: 'App Key',
    name: 'app_key',
    default: '{{your app key}}',
    type: 'string',
    routing: {
      request: {
        qs: {
          app_key: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Update Price'],
      },
    },
  },
  {
    displayName: 'Access Token',
    name: 'access_token',
    default: '{{your access token}}',
    type: 'string',
    routing: {
      request: {
        qs: {
          access_token: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Update Price'],
      },
    },
  },
  {
    displayName: 'Shop Id',
    name: 'shop_id',
    default: '{{your shop id}}',
    type: 'string',
    routing: {
      request: {
        qs: {
          shop_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Update Price'],
      },
    },
  },
  {
    displayName: 'Sign',
    name: 'sign',
    default: '{{sign}}',
    type: 'string',
    routing: {
      request: {
        qs: {
          sign: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Update Price'],
      },
    },
  },
  {
    displayName: 'Timestamp',
    name: 'timestamp',
    default: '{{timestamp}}',
    type: 'string',
    routing: {
      request: {
        qs: {
          timestamp: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Update Price'],
      },
    },
  },
  {
    displayName: 'Product Id',
    name: 'product_id',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          product_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Update Price'],
      },
    },
  },
  {
    displayName: 'Skus',
    name: 'skus',
    type: 'json',
    default: '[\n  {}\n]',
    routing: {
      request: {
        body: {
          skus: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Update Price'],
      },
    },
  },
]
