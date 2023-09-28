import { sizes as mocked } from 'entities';
import Filter from 'filter';

export const sizes = <F, L>(filter: F, locale: L) =>
    new Filter(mocked, filter, locale).byLocale('title').get();
