import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

// Define the schema types here (we will add more later)
const schemaTypes = []

export default defineConfig({
  name: 'default',
  title: 'Shamrocks Admin',

  projectId: 'a2r39toc', 
  dataset: 'production',

  basePath: '/studio', // This tells Sanity to live at shamrocks.fi/studio

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})