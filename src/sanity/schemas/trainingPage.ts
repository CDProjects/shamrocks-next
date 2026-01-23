import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'trainingPage',
  title: 'Page: Training',
  type: 'document',
  fields: [
    defineField({
      name: 'trainingSessions',
      title: 'Training Sessions',
      type: 'array', // This allows you to add as many as you want
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
            // MAP COORDINATES
            defineField({
              name: 'latitude',
              title: 'Map Latitude',
              type: 'number',
              description: 'Right-click the location on Google Maps to see this (e.g. 60.3882)',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'longitude',
              title: 'Map Longitude',
              type: 'number',
              description: 'Right-click the location on Google Maps to see this (e.g. 25.6994)',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
})