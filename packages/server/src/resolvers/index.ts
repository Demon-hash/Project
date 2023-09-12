import { Filter } from '../constructors/filter';
import type { Resolvers } from '../generated/graphql';
import { products } from '../mocks/product';
import { brands } from '../mocks/product/brand';
import { categories } from '../mocks/product/category';
import { colors } from '../mocks/product/color';
import { materials } from '../mocks/product/material';
import { sizes } from '../mocks/product/size';
import { types } from '../mocks/product/type';

export const resolvers: Resolvers = {
    Query: {
        products: (_, args) => {
            return new Filter(products, args)
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
        brands: () => brands,
        colors: () => colors,
        sizes: () => sizes,
        materials: () => materials,
        categories: () => categories,
        types: () => types,
    },
};
