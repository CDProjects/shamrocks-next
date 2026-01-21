import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'medRecPage',
  title: 'Page: Media & Recruitment',
  type: 'document',
  fields: [
    defineField({ name: 'facebookUrl', title: 'Facebook URL', type: 'url' }),
    defineField({ name: 'messengerUrl', title: 'Messenger URL', type: 'url' }),
    defineField({ name: 'instagramUrl', title: 'Instagram URL', type: 'url' }),
    defineField({ name: 'youtubeUrl', title: 'YouTube URL', type: 'url' }),
    defineField({ name: 'recruitmentImage1', title: 'Recruitment Image Top', type: 'image' }),
    defineField({ name: 'recruitmentImage2', title: 'Recruitment Image Bottom', type: 'image' }),
    // We will keep the text hardcoded for now or add simple fields if you really need to edit the "Values" list frequently.
    // Let's allow editing the "New People Welcome" intro text.
    defineField({ name: 'welcomeText', title: 'Welcome Intro Text', type: 'text', rows: 4 }),
  ]
})