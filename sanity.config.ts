import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
// Import the type so TypeScript stops complaining
import { type SchemaTypeDefinition } from 'sanity'

// We explicitly tell TypeScript this is an array of SchemaTypeDefinitions
const schemaTypes: SchemaTypeDefinition[] = []

export default defineConfig({
  name: 'default',
  title: 'Shamrocks Admin',

  projectId: 'a2r39toc',
  dataset: 'production',

  basePath: '/studio', 

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})