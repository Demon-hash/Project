import type { WithOffset } from 'utils';
import { type WithLocale, localization, translate } from 'utils/localization';

export default class Filter<T, F, L> {
    private entities: T[] = [];
    private readonly filter: F | undefined;
    private readonly locale: L | undefined;
    private readonly limit: number;
    private readonly offset: number;

    constructor(entities: T[], filter: WithOffset<F>, locale: L) {
        const { offset = 0, limit = 100 } = filter ?? {};

        this.filter = filter;
        this.entities = entities;
        this.locale = locale;
        this.offset = offset;
        this.limit = limit;
    }

    byLocale(field: string): Filter<WithLocale<T>, F, L> {
        this.entities = this.entities.map(entity =>
            translate(entity, field, this.locale),
        );
        return this;
    }

    byId(field: string) {
        this.entities = this.entities.filter(entity => {
            return typeof this.filter?.[field] === 'string'
                ? entity?.[field] === this.filter[field]
                : true;
        });
        return this;
    }

    byCount(field: string, min = 1) {
        this.entities = this.entities.filter(entity => {
            return entity?.[field] >= (this.filter?.[field] ?? min);
        });
        return this;
    }

    byField(field: string, search = undefined) {
        const data = this.filter?.[field] ?? [];
        this.entities = localization(
            this.entities,
            field,
            search,
            this.locale,
            field.split('.'),
        ).filter(entity => {
            return data.length
                ? entity?.[field]?.some(v => data.includes(v.value))
                : true;
        });
        return this;
    }

    byRange(field: string, range = [0, Infinity]) {
        const price = Array.isArray(this.filter?.[field])
            ? [
                  this.filter?.[field]?.[0] ?? range[0],
                  this.filter?.[field]?.[1] ?? range[1],
              ]
            : range;

        this.entities = this.entities.filter(entity => {
            return entity?.[field] >= price[0] && entity?.[field] <= price[1];
        });
        return this;
    }

    withNormalizer<R>(
        callback: (entities: T[]) => Filter<R, F, L>,
    ): Filter<R, F, L> {
        return callback.bind(this)(this.entities);
    }

    withPagination(): Filter<T, WithOffset<F>, L> {
        this.entities = this.entities.slice(
            this.offset,
            this.offset + this.limit,
        );
        return this;
    }

    get(): T[] {
        return this.entities;
    }
}
