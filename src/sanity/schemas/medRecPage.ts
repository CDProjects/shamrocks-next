import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'medRecPage',
  title: 'Page: Media & Recruitment',
  type: 'document',
  fields: [
    // Removed the social links. They are now hardcoded in the code.
    defineField({ name: 'recruitmentImage1', title: 'Recruitment Image Top', type: 'image' }),
    defineField({ name: 'recruitmentImage2', title: 'Recruitment Image Bottom', type: 'image' }),
    defineField({ name: 'welcomeText', title: 'Welcome Intro Text', type: 'text', rows: 4 }),
  ],
  preview: {
    prepare() {
      return { title: 'Media & Recruitment Content' }
    }
  }
})