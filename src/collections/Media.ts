import { CollectionConfig } from 'payload/types';

const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticURL: '/media', 
    staticDir: 'media', 
    mimeTypes: ['image/*', 'application/octet-stream'], 
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text', 
    },
  ],
}

export default Media;
