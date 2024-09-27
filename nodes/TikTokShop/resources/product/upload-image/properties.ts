import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /api/products/upload_imgs',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Upload Image'],
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
        operation: ['Upload Image'],
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
        operation: ['Upload Image'],
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
        operation: ['Upload Image'],
      },
    },
  },
  {
    displayName: 'Img Data',
    name: 'img_data',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          img_data: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Upload Image'],
      },
    },
  },
  {
    displayName: 'Img Scene',
    name: 'img_scene',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          img_scene: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Upload Image'],
      },
    },
  },
]
