import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'fixture',
  title: 'Match Fixture',
  type: 'document',
  fields: [
    defineField({
      name: 'opponent',
      title: 'Opponent Name',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Match Date',
      type: 'datetime',
    }),
    defineField({
      name: 'score',
      title: 'Score',
      type: 'string',
    }),
  ],
})