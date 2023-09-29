import { productsById as ids, carts as mocked } from 'entities';
import Filter from 'filter';

export const carts = <F, L>(filter: F, locale: L) => {
    return new Filter(mocked, filter, locale)
        .byId('id')
        .withNormalizer(entities => {
            return new Filter(
                entities.map(({ id, products }) => ({
                    id,
                    products: products.map(({ id, count }) => ({
                        product: ids[id],
                        count,
                    })),
                })),
                filter,
                locale,
            );
        })
        .byField('products.product', 'title')
        .byField('products.product', 'description')
        .get();
};
