import type { Paginated } from 'utils';

type Paths<T> = T extends object
    ? {
          [K in keyof T]: `${Exclude<K, symbol>}${'' | `.${Paths<T[K]>}`}`;
      }[keyof T]
    : never;

export default class Builder<const T, const F, const L> {
    private __entities: T[] = [];
    private readonly __filter: F | undefined;
    private readonly __locale: L | undefined;
    private readonly __limit: number;
    private readonly __offset: number;

    constructor(entities: T[], filter: Paginated<F>, locale: L) {
        const { offset = 0, limit = 100 } = filter ?? {};

        this.__filter = filter;
        this.__entities = entities;
        this.__locale = locale;
        this.__offset = offset;
        this.__limit = limit;
    }

    filter<const K extends keyof T, const B extends T[K]>(
        fields: K[],
        callback: (
            value: B,
            filter: (string | number | object) | (object | number | string)[],
            field: K,
        ) => boolean,
    ): Builder<T, F, L> {
        const get = (entity: T, path: string) =>
            path.split('.').reduce((o, i) => o[i], entity);

        for (const field of fields) {
            this.__entities = this.__entities.filter(entity =>
                callback.bind(this)(
                    get(entity, field as string),
                    (this.__filter as unknown as T)?.[field],
                    field,
                ),
            );
        }
        return this;
    }

    resolve<const R>(
        callback: (entities: T[], filter: F, locale: L) => Builder<R, F, L>,
    ): Builder<R, F, L> {
        return callback.bind(this)(
            this.__entities,
            this.__filter,
            this.__locale,
        );
    }

    paginate(): Builder<T, Paginated<F>, L> {
        this.__entities = this.__entities.slice(
            this.__offset,
            this.__offset + this.__limit,
        );
        return this;
    }

    build(): T[] {
        return this.__entities;
    }
}
