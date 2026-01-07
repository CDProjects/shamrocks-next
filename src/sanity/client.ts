import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "a2r39toc", // Paste sanity ID
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false, // Set to false for real-time updates while developing
});