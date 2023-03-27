export default {
  name: 'brandInfo',
  type: 'document',
  title: 'BrandInfo',
  fields: [
    {
      name: 'brand',
      title: 'Brand',
      type: 'string',
    },
    {
      name: 'brandPic',
      title: 'BrandPic',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'brandAlt',
      title: 'BrandAlt',
      type: 'string',
    },
  ],
}
