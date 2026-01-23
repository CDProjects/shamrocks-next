import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'teamPage',
  title: 'Page: Team', // This creates a specific button for the page settings
  type: 'document',
  fields: [
    defineField({
      name: 'seasonTitle',
      title: 'Season Title',
      type: 'string',
      initialValue: '2025 Team Roster',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'teamPhoto',
      title: 'Team Group Photo',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Team Page Settings' }
    }
  }
})