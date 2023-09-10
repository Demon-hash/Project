import { products } from 'mocks';

export const resolvers = {
    Query: {
        products: () => products,
    },

    Mutation: {
        addProduct: (_, args) => {
            const product = { ...args };
            products.push(product);
            return product;
        },
    },
};
