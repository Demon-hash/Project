import { categories as mocked } from 'entities';
import Filter from 'filter';

export const categories = <F, L>(filter: F, locale: L) =>
    new Filter(mocked, filter, locale).byLocale('title').withPagination().get();
