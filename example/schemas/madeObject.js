export default {
  name: 'madeObject',
  title: 'Made object',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'iiifManifest',
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  }
}
