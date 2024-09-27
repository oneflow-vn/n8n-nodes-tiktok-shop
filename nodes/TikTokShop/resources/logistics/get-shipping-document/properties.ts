import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'GET /api/logistics/shipping_document',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Business Logistics'],
        operation: ['Get Shipping Document'],
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
        resource: ['Business Logistics'],
        operation: ['Get Shipping Document'],
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
        resource: ['Business Logistics'],
        operation: ['Get Shipping Document'],
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
        resource: ['Business Logistics'],
        operation: ['Get Shipping Document'],
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
        resource: ['Business Logistics'],
        operation: ['Get Shipping Document'],
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
        resource: ['Business Logistics'],
        operation: ['Get Shipping Document'],
      },
    },
  },
  {
    displayName: 'Order Id',
    name: 'order_id',
    default: 'order id',
    type: 'string',
    routing: {
      request: {
        qs: {
          order_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Logistics'],
        operation: ['Get Shipping Document'],
      },
    },
  },
  {
    displayName: 'Document Type',
    name: 'document_type',
    default: 'document type',
    type: 'string',
    routing: {
      request: {
        qs: {
          document_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Logistics'],
        operation: ['Get Shipping Document'],
      },
    },
  },
  {
    displayName: 'Document Size',
    name: 'document_size',
    default: 'document_size',
    type: 'string',
    routing: {
      request: {
        qs: {
          document_size: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Logistics'],
        operation: ['Get Shipping Document'],
      },
    },
  },
]
