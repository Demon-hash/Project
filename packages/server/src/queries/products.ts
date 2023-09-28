import { products as mocked } from 'entities';
import Filter from 'filter';

export const products = <F, L>(filter: F, locale: L) =>
    new Filter(mocked, filter, locale)
        .byId('id')
        .byLocale('title')
        .byLocale('description')
        .byRange('price')
        .byCount('stock')
        .byField('color', 'title')
        .byField('size', 'title')
        .byField('type', 'title')
        .byField('material', 'title')
        .byField('category', 'title')
        .byField('brand', 'title')
        .withPagination()
        .get();
