import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /api/products/upload_files',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Upload File'],
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
        operation: ['Upload File'],
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
        operation: ['Upload File'],
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
        operation: ['Upload File'],
      },
    },
  },
  {
    displayName: 'File Data',
    name: 'file_data',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          file_data: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Upload File'],
      },
    },
  },
  {
    displayName: 'File Name',
    name: 'file_name',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          file_name: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Upload File'],
      },
    },
  },
]
