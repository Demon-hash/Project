import type { CodegenConfig } from '@graphql-codegen/cli';
import { schema } from '../@graphql/schema';

const config: CodegenConfig = {
    overwrite: true,
    schema,
    documents: 'src/graphql/**/*.graphql',
    generates: {
        './src/graphql/generated.ts': {
            plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
            config: {
                withRefetchFn: true,
            },
        },
    },
};

export default config;
