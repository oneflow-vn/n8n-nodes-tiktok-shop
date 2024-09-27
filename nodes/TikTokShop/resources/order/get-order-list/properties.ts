import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /api/orders/search',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Business Order'],
        operation: ['Get Order List'],
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
        resource: ['Business Order'],
        operation: ['Get Order List'],
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
        resource: ['Business Order'],
        operation: ['Get Order List'],
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
        resource: ['Business Order'],
        operation: ['Get Order List'],
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
        resource: ['Business Order'],
        operation: ['Get Order List'],
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
        resource: ['Business Order'],
        operation: ['Get Order List'],
      },
    },
  },
  {
    displayName: 'Create Time From',
    name: 'create_time_from',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          create_time_from: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Order'],
        operation: ['Get Order List'],
      },
    },
  },
  {
    displayName: 'Create Time To',
    name: 'create_time_to',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          create_time_to: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Order'],
        operation: ['Get Order List'],
      },
    },
  },
  {
    displayName: 'Update Time From',
    name: 'update_time_from',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          update_time_from: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Order'],
        operation: ['Get Order List'],
      },
    },
  },
  {
    displayName: 'Update Time To',
    name: 'update_time_to',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          update_time_to: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Order'],
        operation: ['Get Order List'],
      },
    },
  },
  {
    displayName: 'Sort Type',
    name: 'sort_type',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          sort_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Order'],
        operation: ['Get Order List'],
      },
    },
  },
  {
    displayName: 'Sort By',
    name: 'sort_by',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          sort_by: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Order'],
        operation: ['Get Order List'],
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
        resource: ['Business Order'],
        operation: ['Get Order List'],
      },
    },
  },
]
