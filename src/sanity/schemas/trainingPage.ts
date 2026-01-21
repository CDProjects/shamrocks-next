import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'trainingPage',
  title: 'Page: Training',
  type: 'document',
  fields: [
    defineField({
      name: 'juniorsSchedule',
      title: 'Juniors & Touch Schedule',
      type: 'text',
      rows: 3,
      description: 'e.g. THURSDAY 01.01.26 to 30.04.2026...'
    }),
    defineField({
      name: 'juniorsMapLink',
      title: 'Juniors Google Maps Link',
      type: 'url'
    }),
    defineField({
      name: 'mensSchedule',
      title: 'Mens Schedule',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'mensMapLink',
      title: 'Mens Google Maps Link',
      type: 'url'
    }),
  ]
})