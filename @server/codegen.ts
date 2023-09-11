import type { CodegenConfig } from '@graphql-codegen/cli';
import { schema } from './src/schema';

const config: CodegenConfig = {
  overwrite: true,
  schema,
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"]
    }
  }
};

export default config;
