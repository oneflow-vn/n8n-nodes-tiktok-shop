import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /api/products/search',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Get Product List'],
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
        operation: ['Get Product List'],
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
        operation: ['Get Product List'],
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
        operation: ['Get Product List'],
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
        operation: ['Get Product List'],
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
        operation: ['Get Product List'],
      },
    },
  },
  {
    displayName: 'Page Size',
    name: 'page_size',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          page_size: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Get Product List'],
      },
    },
  },
  {
    displayName: 'Page Number',
    name: 'page_number',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          page_number: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Get Product List'],
      },
    },
  },
  {
    displayName: 'Search Status',
    name: 'search_status',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          search_status: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Get Product List'],
      },
    },
  },
  {
    displayName: 'Seller Sku List',
    name: 'seller_sku_list',
    type: 'json',
    default: '[\n  null\n]',
    routing: {
      request: {
        body: {
          seller_sku_list: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Get Product List'],
      },
    },
  },
]
