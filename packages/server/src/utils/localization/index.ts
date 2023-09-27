import type { Normalize } from '../index';

export type WithLocale<T> = Normalize<
    T,
    {
        title: string;
    }
>;

export function localization<T, L, P extends string[]>(
    data: T[],
    field?: string,
    search?: string,
    locale?: L,
    path?: P,
): T[] | WithLocale<T>[] {
    if (path.length > 1) {
        return data.map(entity =>
            localizeByNesting(entity, search, locale, path),
        );
    }

    return data.map(entity => {
        if (Array.isArray(entity?.[field])) {
            return {
                ...entity,
                [field]: entity[field].map((each: T) =>
                    translate(each, search, locale),
                ),
            };
        }

        return translate(entity, field, locale);
    });
}

export function translate<T, L>(data: T, field?: string, locale?: L) {
    return {
        ...data,
        [field]: data?.[field]?.[locale] ?? data?.[field]?.['en'],
    };
}

export function localizeByNesting<T, L, F extends string, P extends string[]>(
    data: T,
    field: F,
    locale: L,
    path: P,
) {
    const extracted = path.shift();
    if (typeof extracted !== 'string') {
        return data;
    }

    const current = data?.[extracted];

    if (Array.isArray(current)) {
        return {
            ...data,
            [extracted]: current.map(entity =>
                localizeByNesting(entity, field, locale, path),
            ),
        };
    }

    return {
        ...data,
        [extracted]: __detectNestingLocalization(current, field, locale),
    };
}

function __detectNestingLocalization<T, L>(
    data: T | T[],
    field?: string,
    locale?: L,
) {
    if (Array.isArray(data)) {
        return data.map(each => translate(each, field, locale));
    }

    return translate(data, field, locale);
}
