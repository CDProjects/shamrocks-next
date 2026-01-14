import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'player',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Forward', value: 'Forward' },
          { title: 'Back', value: 'Back' },
          { title: 'Coach', value: 'Coach' },
        ],
        layout: 'radio'
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role / Title (Optional)',
      description: 'e.g. "C", "VC", "Head Coach", "Backs Coach"',
      type: 'string',
    }),
    // These fields are for the FUTURE Player Cards idea
    // Added now so I can start filling them in whenever
    defineField({
      name: 'position',
      title: 'Playing Position',
      description: 'e.g. Prop, Flanker, Fly Half',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Profile Photo',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  orderings: [
    {
      title: 'Name',
      name: 'nameAsc',
      by: [{field: 'name', direction: 'asc'}]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'image'
    }
  }
})