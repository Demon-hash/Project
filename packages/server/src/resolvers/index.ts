import {
    brands,
    categories,
    colors,
    materials,
    products,
    sizes,
    sorts,
    types,
} from 'entities';
import { Filter } from 'filter';
import type { Resolvers } from 'generated';

export const resolvers: Resolvers = {
    Query: {
        products(_, { filter }) {
            return new Filter(products, filter)
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
            return brands;
        },
        colors() {
            return colors;
        },
        sizes() {
            return sizes;
        },
        materials() {
            return materials;
        },
        categories() {
            return categories;
        },
        types() {
            return types;
        },
        sort() {
            return sorts;
        },
    },
};
