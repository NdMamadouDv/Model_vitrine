export default {
  name: 'section3',
  type: 'document',
  title: 'Section 3',
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
      name: 'section3image',
      title: 'section3Image',
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
