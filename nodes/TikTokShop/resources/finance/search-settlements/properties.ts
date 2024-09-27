import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /api/finance/settlements/search',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Business Finance'],
        operation: ['Search Settlements'],
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
        resource: ['Business Finance'],
        operation: ['Search Settlements'],
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
        resource: ['Business Finance'],
        operation: ['Search Settlements'],
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
        resource: ['Business Finance'],
        operation: ['Search Settlements'],
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
        resource: ['Business Finance'],
        operation: ['Search Settlements'],
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
        resource: ['Business Finance'],
        operation: ['Search Settlements'],
      },
    },
  },
  {
    displayName: 'Request Time From',
    name: 'request_time_from',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          request_time_from: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Finance'],
        operation: ['Search Settlements'],
      },
    },
  },
  {
    displayName: 'Request Time To',
    name: 'request_time_to',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          request_time_to: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Finance'],
        operation: ['Search Settlements'],
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
        resource: ['Business Finance'],
        operation: ['Search Settlements'],
      },
    },
  },
  {
    displayName: 'Cursor',
    name: 'cursor',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          cursor: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Finance'],
        operation: ['Search Settlements'],
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
        resource: ['Business Finance'],
        operation: ['Search Settlements'],
      },
    },
  },
]
