import { CollectionConfig } from 'payload/types';

const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticURL: '/media', // URL estática donde se accederán los medios
    staticDir: 'media', // Directorio donde se guardarán los archivos
    /* imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'tablet',
        width: 1024,
        // By specifying `undefined` or leaving a height undefined,
        // the image will be sized to a certain width,
        // but it will retain its original aspect ratio
        // and calculate a height automatically.
        height: undefined,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail', */
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
