import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'trainingPage',
  title: 'Page: Training',
  type: 'document',
  fields: [
    defineField({
      name: 'trainingSessions',
      title: 'Training Sessions',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Session',
          fields: [
            defineField({
              name: 'title',
              title: 'Group Title',
              type: 'string',
              description: 'e.g. Juniors & Touch, Mens, Beginners',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'schedule',
              title: 'Schedule Details',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'locationName',
              title: 'Location Name',
              type: 'string',
              description: 'e.g. Kanteletalo A-Hall',
            }),
            defineField({
              name: 'googleMapsLink',
              title: 'Google Maps Link (For Button)',
              type: 'url',
            }),
            defineField({
              name: 'latitude',
              title: 'Map Latitude',
              type: 'number',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'longitude',
              title: 'Map Longitude',
              type: 'number',
              validation: (Rule) => Rule.required(),
            }),
          ],
          // FIX 1: Make the list items look nice
          preview: {
            select: {
              title: 'title',
              subtitle: 'locationName'
            }
          }
        },
      ],
    }),
  ],
  // FIX 2: Make the main document look nice in the list
  preview: {
    prepare() {
      return {
        title: 'Training Page Content',
        subtitle: 'Edit schedules and locations here'
      }
    }
  }
})