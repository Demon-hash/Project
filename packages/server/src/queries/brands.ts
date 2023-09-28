import { brands as mocked } from 'entities';
import Filter from 'filter';

export const brands = <F, L>(filter: F, locale: L) =>
    new Filter(mocked, filter, locale).byLocale('title').get();
