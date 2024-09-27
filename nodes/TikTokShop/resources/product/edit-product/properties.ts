import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'PUT /api/products',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Edit Product'],
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
        operation: ['Edit Product'],
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
        operation: ['Edit Product'],
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
        operation: ['Edit Product'],
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
        operation: ['Edit Product'],
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
        operation: ['Edit Product'],
      },
    },
  },
  {
    displayName: 'Code',
    name: 'code',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          code: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Edit Product'],
      },
    },
  },
  {
    displayName: 'Message',
    name: 'message',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          message: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Edit Product'],
      },
    },
  },
  {
    displayName: 'Request Id',
    name: 'request_id',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          request_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Edit Product'],
      },
    },
  },
  {
    displayName: 'Data',
    name: 'data',
    type: 'json',
    default:
      '{\n  "skus": [\n    {\n      "sales_attributes": [\n        {}\n      ]\n    }\n  ]\n}',
    routing: {
      request: {
        body: {
          data: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Edit Product'],
      },
    },
  },
]
