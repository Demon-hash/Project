import { products } from 'mocks';

export const resolvers = {
    Query: {
        products: () => products,
    },

    Mutation: {
        addProduct: (_, {
            title,
            price,
            count,
            color,
            size,
            material,
        }) => {
            const product = {
                title,
                price,
                count,
                color,
                size,
                material,
            };
            products.push(product);

            return product;
        },
    },
};
