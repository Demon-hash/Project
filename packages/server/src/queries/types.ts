import { types as mocked } from 'entities';
import Filter from 'filter';

export const types = <F, L>(filter: F, locale: L) =>
    new Filter(mocked, filter, locale).byLocale('title').get();
