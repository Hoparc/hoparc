import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://wmbh46cs.api.sanity.io/v1/graphql/production/default",
  documents: "./**/*.graphql",
  generates: {
    "./graphql-operations.ts": {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
    },
  },
};
export default config;
