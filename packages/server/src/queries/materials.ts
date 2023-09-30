import Builder from 'builder';
import { materials as mocked } from 'entities';
import { translateArray } from 'utils/localization';

export const materials = <F>(filter: F, locale: string) =>
    new Builder(mocked, filter, locale)
        .resolve(entities => {
            return new Builder(
                translateArray(entities, locale),
                filter,
                locale,
            );
        })
        .paginate()
        .build();
