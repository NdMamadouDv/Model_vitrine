export default {
  name: 'section1',
  type: 'document',
  title: 'Section 1',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'titre de la section',
      type: 'string',
    },

    {
      name: 'h2',
      title: 'H2',
      type: 'string',
    },
    {
      name: 'h3',
      title: 'H3',
      type: 'string',
    },
    {
      name: 'section1image',
      title: 'section1Image',
      type: 'image',
      options: {hotspot: true},
    },

    {
      name: 'CTA',
      title: 'CTA',
      type: 'array',
      of: [{type: 'reference', to: {type: 'CTA'}}],
    },
  ],
}
