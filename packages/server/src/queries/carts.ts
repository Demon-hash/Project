import { carts as mocked, products as mocked2 } from 'entities';
import Filter from 'filter';

export const carts = <F, L>(filter: F, locale: L) => {
    return new Filter(mocked, filter, locale)
        .byId('id')
        .withNormalizer(entities => {
            const normalized = entities.map(entity => {
                const products = mocked2
                    .filter(product =>
                        entity.products.some(m => m.id === product.id),
                    )
                    .map(product => ({
                        product,
                        count: 1,
                    }));

                return {
                    id: entity.id,
                    products,
                };
            });

            return new Filter(normalized, filter, locale);
        })
        .byField('products.product', 'title')
        .byField('products.product', 'description')
        .get();
};
