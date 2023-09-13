import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    documents: 'src/graphql/**/*.graphql',
    generates: {
        './src/graphql/generated.ts': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
            ],
            config: {
                withRefetchFn: true,
            },
        },
    },
};

export default config;
