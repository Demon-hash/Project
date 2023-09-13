import * as mocked from 'entities';
import { Filter } from 'filter';
import type { Resolvers } from 'generated';

export const resolvers: Resolvers = {
    Query: {
        products(_, { filter }) {
            return new Filter(mocked.products, filter)
                .byId('id')
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
        brands() {
            return mocked.brands;
        },
        colors() {
            return mocked.colors;
        },
        sizes() {
            return mocked.sizes;
        },
        materials() {
            return mocked.materials;
        },
        categories() {
            return mocked.categories;
        },
        types() {
            return mocked.types;
        },
        sort() {
            return mocked.sorts;
        },
    },
};
