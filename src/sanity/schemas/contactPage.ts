import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Page: Contact',
  type: 'document',
  fields: [
    defineField({ name: 'addressLine1', title: 'Address Line 1', type: 'string' }),
    defineField({ name: 'addressLine2', title: 'Address Line 2', type: 'string' }),
    defineField({ name: 'chairmanName', title: 'Chairman Name', type: 'string' }),
    defineField({ name: 'chairmanPhone', title: 'Chairman Phone', type: 'string' }),
    defineField({ name: 'clubEmail', title: 'Club Email', type: 'string' }),
  ]
})