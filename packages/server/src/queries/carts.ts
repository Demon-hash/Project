import Builder from 'builder';
import { productsById as ids, carts as mocked } from 'entities';
import type { Cart } from 'generated';
import { id, locale, range, text } from 'utils/filters';
import { product as translate } from 'utils/localization';

export const carts = <F>(filter: F, localization: string) => {
    return (
        new Builder(mocked, filter, localization)
            .resolve(entities => {
                const carts: Cart[] = entities.map(({ id, products }) => ({
                    id,
                    products: products.map(({ id, count }) => ({
                        product: translate(ids[id], localization),
                        count,
                    })),
                }));

                return new Builder(carts, filter, localization);
            })
            .filter(['id'], id)
            .filter(
                // @ts-ignore
                ['products.0.product.title', 'products.0.product.description'],
                text,
            )
            // .filter(
            //     [
            //         'products.product.color',
            //         'products.product.material',
            //         'products.product.brand',
            //         'products.product.category',
            //         'products.product.size',
            //         'products.product.type',
            //     ],
            //     locale,
            // )
            // .filter(['products.product.price', 'products.product.stock'], range)
            .build()
    );
};
