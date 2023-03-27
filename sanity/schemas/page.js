export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'titre de la page',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'description',
      title: 'Title',
      description: 'description de la page',
      type: 'string',
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'logo',
    },
  },
}
