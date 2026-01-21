import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'juniorsPage',
  title: 'Page: Juniors',
  type: 'document',
  fields: [
    defineField({ name: 'topImage1', title: 'Top Left Image', type: 'image' }),
    defineField({ name: 'topImage2', title: 'Top Right Image', type: 'image' }),
    defineField({
      name: 'contentFinnish',
      title: 'Content (Finnish)',
      type: 'text',
      rows: 6
    }),
    defineField({
      name: 'contentEnglish',
      title: 'Content (English)',
      type: 'text',
      rows: 6
    }),
    defineField({ name: 'bottomImage1', title: 'Bottom Left Image', type: 'image' }),
    defineField({ name: 'bottomImage2', title: 'Bottom Right Image', type: 'image' }),
  ]
})