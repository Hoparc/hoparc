
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://wmbh46cs.api.sanity.io/v1/graphql/production/default",
  documents: "graphql/**/*.graphql",
  generates: {
    "generated/graphql.tsx": {
      preset: "client",
      plugins: []
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
