import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'touchPage',
  title: 'Page: Touch',
  type: 'document',
  fields: [
    defineField({
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'introText',
      title: 'Intro Text',
      type: 'text',
      rows: 10,
      description: 'The main description text at the top of the page.'
    }),
    defineField({
      name: 'qaSection',
      title: 'Q&A Section',
      type: 'array',
      of: [{
        type: 'object',
        title: 'Q&A Item',
        fields: [
          defineField({
            name: 'question',
            type: 'string',
            title: 'Question',
            validation: (Rule) => Rule.required()
          }),
          defineField({
            name: 'answer',
            type: 'text',
            title: 'Answer',
            rows: 3,
            validation: (Rule) => Rule.required()
          })
        ],
        // This makes the list of Questions look nice in the Studio too
        preview: {
          select: {
            title: 'question',
            subtitle: 'answer'
          }
        }
      }]
    })
  ],
  // FIX: This cleans up the main header in the Studio
  preview: {
    prepare() {
      return {
        title: 'Touch Page Content',
        subtitle: 'Edit poster, intro text, and Q&A here'
      }
    }
  }
})