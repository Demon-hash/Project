import type { CodegenConfig } from '@graphql-codegen/cli';
import { schema } from './src/entities/schema';

const config: CodegenConfig = {
    overwrite: true,
    schema,
    generates: {
        'src/graphql/index.ts': {
            plugins: ['typescript', 'typescript-resolvers'],
        },
    },
};

export default config;
