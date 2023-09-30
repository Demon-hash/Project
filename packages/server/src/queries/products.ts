import Builder from 'builder';
import { products as mocked } from 'entities';
import type { Product } from 'generated';
import { id, locale, range, text } from 'utils/filters';
import { product as translate } from 'utils/localization';

export const products = <F>(filter: F, localization: string) =>
    new Builder(mocked, filter, localization)
        .resolve(entities => {
            const products: Product[] = entities.map(product =>
                translate(product, localization),
            );
            return new Builder(products, filter, localization);
        })
        .filter(['id'], id)
        .filter(['title', 'description'], text)
        .filter(
            ['color', 'material', 'brand', 'category', 'size', 'type'],
            locale,
        )
        .filter(['price', 'stock'], range)
        .paginate()
        .build();
