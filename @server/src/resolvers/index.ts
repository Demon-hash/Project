import { Resolvers } from '../generated/graphql';
import { products } from 'mocks';

export const resolvers: Resolvers = {
    Query: {
        products: () => products,
    },
    /*Mutation: {
        addProduct: (_, args) => {
            const product = { ...args };
            products.push(product);
            return product;
        },
    },*/
};
