import { Resolvers } from '../generated/graphql';
import { products } from '../mocks/product';
import { brands } from '../mocks/product/brand';
import { categories } from '../mocks/product/category';
import { colors } from '../mocks/product/color';
import { materials } from '../mocks/product/material';
import { sizes } from '../mocks/product/size';
import { types } from '../mocks/product/type';

export const resolvers: Resolvers = {
    Query: {
        products: (_, { limit = 11, offset = 0, filter }) => {
            const {
                id,
                price = [0, Infinity],
                stock = 1,
                color = [],
                size = [],
                type = [],
                material = [],
                category = [],
                brand = [],
            } = filter ?? {};
            return products
                .slice(offset, offset + limit)
                .filter(product =>
                    typeof id === 'string' ? product.id === id : true,
                )
                .filter(product => product.stock >= stock)
                .filter(
                    product =>
                        product.price >= price[0] && product.price <= price[1],
                )
                .filter(product =>
                    color.length
                        ? product.color.some(c => color.includes(c.value))
                        : true,
                );
        },
        brands: () => brands,
        colors: () => colors,
        sizes: () => sizes,
        materials: () => materials,
        categories: () => categories,
        types: () => types,
    },
    /*Mutation: {
        addProduct: (_, args) => {
            const product = { ...args };
            products.push(product);
            return product;
        },
    },*/
};
