import type en from './src/locale/en.json';

declare module 'i18next' {
    interface CustomTypeOptions {
        resources: typeof en;
    }
}