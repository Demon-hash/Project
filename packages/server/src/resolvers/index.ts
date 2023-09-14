import * as mocked from 'entities';
import { Filter } from 'filter';
import type { Resolvers } from 'generated';

export const resolvers: Resolvers = {
    Query: {
        products(_, { filter, locale }) {
            return new Filter(mocked.products, filter, locale)
                .byId('id')
                .byLocale('title')
                .byRange('price')
                .byCount('stock')
                .byField('color')
                .byField('size')
                .byField('type')
                .byField('material')
                .byField('category')
                .byField('brand')
                .withPagination()
                .get();
        },
        // @ts-ignore
        brands(_, { locale }) {
            return new Filter(mocked.brands, undefined, locale)
                .byLocale('title')
                .get();
        },
        // @ts-ignore
        colors(_, { locale }) {
            return new Filter(mocked.colors, undefined, locale)
                .byLocale('title')
                .get();
        },
        // @ts-ignore
        sizes(_, { locale }) {
            return new Filter(mocked.sizes, undefined, locale)
                .byLocale('title')
                .get();
        },
        // @ts-ignore
        materials(_, { locale }) {
            return new Filter(mocked.materials, undefined, locale)
                .byLocale('title')
                .get();
        },
        // @ts-ignore
        categories(_, { locale }) {
            return new Filter(mocked.categories, undefined, locale)
                .byLocale('title')
                .get();
        },
        // @ts-ignore
        types(_, { locale }) {
            return new Filter(mocked.types, undefined, locale)
                .byLocale('title')
                .get();
        },
        // @ts-ignore
        sort(_, { locale }) {
            return new Filter(mocked.sorts, undefined, locale)
                .byLocale('title')
                .get();
        },
    },
};
