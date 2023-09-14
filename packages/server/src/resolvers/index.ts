import * as mocked from 'entities';
import Filter from 'filter';
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
        categories(_, { filter, locale }) {
            return new Filter(mocked.categories, filter, locale)
                .byLocale('title')
                .withPagination()
                .get();
        },
        brands(_, { locale }) {
            return new Filter(mocked.brands, undefined, locale)
                .byLocale('title')
                .get();
        },
        colors(_, { locale }) {
            return new Filter(mocked.colors, undefined, locale)
                .byLocale('title')
                .get();
        },
        sizes(_, { locale }) {
            return new Filter(mocked.sizes, undefined, locale)
                .byLocale('title')
                .get();
        },
        materials(_, { locale }) {
            return new Filter(mocked.materials, undefined, locale)
                .byLocale('title')
                .get();
        },
        types(_, { locale }) {
            return new Filter(mocked.types, undefined, locale)
                .byLocale('title')
                .get();
        },
        sort(_, { locale }) {
            return new Filter(mocked.sorts, undefined, locale)
                .byLocale('title')
                .get();
        },
    },
};
