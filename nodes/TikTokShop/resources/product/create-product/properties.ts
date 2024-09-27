import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /api/products',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Create Product'],
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
        operation: ['Create Product'],
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
        operation: ['Create Product'],
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
        operation: ['Create Product'],
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
        operation: ['Create Product'],
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
        operation: ['Create Product'],
      },
    },
  },
  {
    displayName: 'Product Name',
    name: 'product_name',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          product_name: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Create Product'],
      },
    },
  },
  {
    displayName: 'Description',
    name: 'description',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {},
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Create Product'],
      },
    },
  },
  {
    displayName: 'Category Id',
    name: 'category_id',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          category_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Create Product'],
      },
    },
  },
  {
    displayName: 'Brand Id',
    name: 'brand_id',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          brand_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Create Product'],
      },
    },
  },
  {
    displayName: 'Images',
    name: 'images',
    type: 'json',
    default: '[\n  {}\n]',
    routing: {
      request: {
        body: {
          images: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Create Product'],
      },
    },
  },
  {
    displayName: 'Warranty Period',
    name: 'warranty_period',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          warranty_period: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Create Product'],
      },
    },
  },
  {
    displayName: 'Warranty Policy',
    name: 'warranty_policy',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          warranty_policy: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Create Product'],
      },
    },
  },
  {
    displayName: 'Package Length',
    name: 'package_length',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          package_length: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Create Product'],
      },
    },
  },
  {
    displayName: 'Package Width',
    name: 'package_width',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          package_width: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Create Product'],
      },
    },
  },
  {
    displayName: 'Package Height',
    name: 'package_height',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          package_height: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Create Product'],
      },
    },
  },
  {
    displayName: 'Package Weight',
    name: 'package_weight',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          package_weight: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Create Product'],
      },
    },
  },
  {
    displayName: 'Product Certifications',
    name: 'product_certifications',
    type: 'json',
    default:
      '[\n  {\n    "files": [\n      {}\n    ],\n    "images": [\n      {}\n    ]\n  }\n]',
    routing: {
      request: {
        body: {
          product_certifications: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Create Product'],
      },
    },
  },
  {
    displayName: 'Is Cod Open',
    name: 'is_cod_open',
    type: 'boolean',
    default: true,
    routing: {
      request: {
        body: {
          is_cod_open: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Business Product'],
        operation: ['Create Product'],
      },
    },
  },
  {
    displayName: 'Skus',
    name: 'skus',
    type: 'json',
    default:
      '[\n  {\n    "sales_attributes": [\n      null\n    ],\n    "stock_infos": [\n      {}\n    ]\n  }\n]',
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
        operation: ['Create Product'],
      },
    },
  },
]
