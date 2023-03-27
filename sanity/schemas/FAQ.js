export default {
  name: 'faq',
  type: 'document',
  title: 'FAQ',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'titre de la section',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'string',
    },
    {
      name: 'FAQImage',
      title: 'FAQImage',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'question1',
      title: 'Question1',
      type: 'string',
    },
    {
      name: 'question2',
      title: 'Question2',
      type: 'string',
    },
    {
      name: 'question3',
      title: 'Question3',
      type: 'string',
    },
    {
      name: 'question4',
      title: 'Question4',
      type: 'string',
    },
    {
      name: 'question5',
      title: 'Question5',
      type: 'string',
    },
    {
      name: 'reponse1',
      title: 'Reponse1',
      type: 'string',
    },
    {
      name: 'reponse2',
      title: 'Reponse2',
      type: 'string',
    },
    {
      name: 'reponse3',
      title: 'Reponse3',
      type: 'string',
    },
    {
      name: 'reponse4',
      title: 'Reponse4',
      type: 'string',
    },
    {
      name: 'reponse5',
      title: 'Reponse5',
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
