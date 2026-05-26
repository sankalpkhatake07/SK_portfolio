import { defineConfig } from "sanity";
import { schemaTypes } from "./sanity/schemaTypes";
import { portfolioEnv } from "./lib/env";

export default defineConfig({
  name: "default",
  title: "Sankalp Portfolio Studio",
  projectId: portfolioEnv.sanityStudioProjectId || "your-project-id",
  dataset: portfolioEnv.sanityStudioDataset,
  basePath: "/studio",
  schema: {
    types: schemaTypes,
  },
});
