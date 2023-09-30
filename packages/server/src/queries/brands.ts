import Builder from 'builder';
import { brands as mocked } from 'entities';
import { translateArray } from 'utils/localization';

export const brands = <F>(filter: F, locale: string) =>
    new Builder(mocked, filter, locale)
        .resolve(entities => {
            return new Builder(
                translateArray(entities, locale),
                filter,
                locale,
            );
        })
        .build();
