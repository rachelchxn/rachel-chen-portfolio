import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  title: "Rachel Chen's Portfolio",
  projectId: "q7a7buiu",
  dataset: "production",
  apiVersion: "2024-05-05",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
