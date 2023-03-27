export default {
  name: 'section2',
  type: 'document',
  title: 'Section 2',
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
      name: 'section2image',
      title: 'section2Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'section2image2',
      title: 'section2Image2',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'section2image3',
      title: 'section2Image3',
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
