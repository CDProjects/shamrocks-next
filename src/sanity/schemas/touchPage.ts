import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'touchPage',
  title: 'Page: Touch',
  type: 'document',
  fields: [
    defineField({ name: 'poster', title: 'Poster Image', type: 'image' }),
    defineField({ name: 'introText', title: 'Intro Text', type: 'text', rows: 5 }),
    defineField({
      name: 'qaSection',
      title: 'Q&A Section',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'question', type: 'string', title: 'Question' },
          { name: 'answer', type: 'text', title: 'Answer' }
        ]
      }]
    })
  ]
})