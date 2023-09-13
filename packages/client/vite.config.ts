import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import codegen from 'vite-plugin-graphql-codegen';
import tsconfigPaths from 'vite-tsconfig-paths';
import config from './codegen.ts';

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
    return defineConfig({
        plugins: [
            react(),
            tsconfigPaths(),
            codegen({
                throwOnStart: true,
                config,
                configOverride: {
                    schema: `${
                        mode === 'production'
                            ? process.env.GRAPHQL_SCHEMA_URL
                            : process.env.VITE_GRAPHQL_SCHEMA_URL
                    }/graphql`,
                },
            }),
        ],
    });
};
