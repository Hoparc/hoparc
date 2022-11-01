import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://wmbh46cs.api.sanity.io/v1/graphql/production/default",
  documents: ["src/**/*.tsx"],
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};
export default config;
