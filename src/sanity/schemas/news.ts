import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'news',
  title: 'News Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description: 'Click "Generate" to create the URL automatically.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Published Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Article Content',
      type: 'text', // Simple text area to match your current format
      rows: 10,
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'additionalImages',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image' }],
    }),
  ],
  orderings: [
    {
      title: 'Newest First',
      name: 'dateDesc',
      by: [{field: 'date', direction: 'desc'}]
    }
  ]
})