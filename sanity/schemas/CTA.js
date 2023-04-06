export default {
  name: 'CTA',
  title: 'CTA',
  type: 'document',
  fields: [
    {
      name: 'titleCTA',
      title: 'TitleCTA',
      description: 'CTA call to action',
      type: 'string',
    },
    {
      name: 'textCTA',
      title: 'TextCTA',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },

    {
      name: 'linkType',
      title: 'LinkType',
      type: 'string',
      options: {
        list: [
          {title: 'External', value: 'External'},
          {title: 'Internal', value: 'Internal'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'linkTarget',
      title: 'LinkTarget',
      type: 'string',
      options: {
        list: [
          {title: 'Blank', value: '_blank'},
          {title: 'Self', value: '_self'},
        ],
        layout: 'radio',
      },
    },
  ],
}
