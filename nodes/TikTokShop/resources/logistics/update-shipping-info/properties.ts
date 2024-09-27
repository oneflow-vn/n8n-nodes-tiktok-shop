import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /api/logistics/tracking',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Business Logistics'],
        operation: ['Update Shipping Info'],
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
        operation: ['Update Shipping Info'],
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
        operation: ['Update Shipping Info'],
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
        operation: ['Update Shipping Info'],
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
        operation: ['Update Shipping Info'],
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
        operation: ['Update Shipping Info'],
      },
    },
  },
  {
    displayName: 'Order Id',
    name: 'order_id',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          order_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Logistics'],
        operation: ['Update Shipping Info'],
      },
    },
  },
  {
    displayName: 'Tracking Number',
    name: 'tracking_number',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          tracking_number: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Logistics'],
        operation: ['Update Shipping Info'],
      },
    },
  },
  {
    displayName: 'Provider Id',
    name: 'provider_id',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          provider_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Logistics'],
        operation: ['Update Shipping Info'],
      },
    },
  },
]
