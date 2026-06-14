import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'newsPage',
  title: 'Page: News',
  type: 'document',
  fields: [
    defineField({
      name: 'topImage',
      title: 'Top Banner Image',
      type: 'image',
    })
  ],
  preview: {
    prepare() { return { title: 'News Page Settings' } }
  }
})