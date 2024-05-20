import { CollectionConfig } from 'payload/types';

const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticURL: '/media', // URL estática donde se accederán los medios
    staticDir: 'media', // Directorio donde se guardarán los archivos
    mimeTypes: ['image/*', 'application/octet-stream'], 
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text', // Campo para texto alternativo de la imagen
    },
  ],
}

export default Media;
