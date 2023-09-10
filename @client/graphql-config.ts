import type { CodegenConfig } from '@graphql-codegen/cli';
import { schema } from '../@graphql/schema';

const config: CodegenConfig = {
    overwrite: true,
    schema,
    documents: ['graphql/queries/*.ts'],
    generates: {
        'src/graphql/': {
            preset: 'client',
            plugins: [],
        },
        './graphql.schema.json': {
            plugins: ['introspection'],
        },
    },
    ignoreNoDocuments: true,
};

export default config;
