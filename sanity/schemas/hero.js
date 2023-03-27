export default {
  name: 'hero',
  type: 'document',
  title: 'Hero',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'titre du hero',
      type: 'string',
    },
    {
      name: 'h1',
      title: 'H1',
      type: 'string',
    },
    {
      name: 'h2',
      title: 'H2',
      type: 'string',
    },
    {
      name: 'heroImage',
      title: 'HeroImage',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'heroImageAlt',
      title: 'HeroImageAlt',
      type: 'string',
    },
    {
      name: 'CTA',
      title: 'CTA',
      type: 'array',
      of: [{type: 'reference', to: {type: 'CTA'}}],
    },
  ],
}
