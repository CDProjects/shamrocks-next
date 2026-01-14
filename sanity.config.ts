import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
// Import the schema type
import fixture from './src/sanity/schemas/fixture'
import player from './src/sanity/schemas/player'

export default defineConfig({
  name: 'default',
  title: 'Shamrocks Admin',

  projectId: 'a2r39toc',
  dataset: 'production',

  basePath: '/studio', 

  plugins: [structureTool(), visionTool()],

  schema: {
    // We list our content types here
    types: [fixture, player],
  },
})