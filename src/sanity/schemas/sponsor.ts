import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'sponsor',
  title: 'Sponsors',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Company Name', type: 'string' }),
    defineField({ name: 'logo', title: 'Logo', type: 'image' }),
    defineField({ name: 'url', title: 'Website Link', type: 'url' }),
    defineField({ 
      name: 'showInFooter', 
      title: 'Show in Footer Carousel?', 
      type: 'boolean', 
      initialValue: true,
      description: 'Turn this off if you only want them in the Homepage Grid.' 
    }),
  ],
  preview: {
    select: { title: 'name', media: 'logo' }
  }
})