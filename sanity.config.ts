import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
// Import the schema type
import fixture from './src/sanity/schemas/fixture'
import player from './src/sanity/schemas/player'
import news from './src/sanity/schemas/news'
import trainingPage from './src/sanity/schemas/trainingPage'
import juniorsPage from './src/sanity/schemas/juniorsPage'
import touchPage from './src/sanity/schemas/touchPage'
import fixturesPage from './src/sanity/schemas/fixturesPage'
import contactPage from './src/sanity/schemas/contactPage'
import medRecPage from './src/sanity/schemas/medRecPage'

export default defineConfig({
  name: 'default',
  title: 'Shamrocks Admin',

  projectId: 'a2r39toc',
  dataset: 'production',

  basePath: '/studio', 

  plugins: [structureTool(), visionTool()],

  schema: {
    // We list our content types here
    types: [
      fixture, 
      player, 
      news,
      trainingPage, 
      juniorsPage, 
      touchPage, 
      fixturesPage,
      contactPage, 
      medRecPage
    ]
  },
})