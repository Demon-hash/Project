export class Filter<T, F> {
    private entities: T[] = [];
    private readonly filter: F | undefined;
    private readonly limit: number;
    private readonly offset: number;

    constructor(entities: T[], filter: F) {
        this.filter = filter;
        this.entities = entities;
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

    byField(field: string) {
        const data = this.filter?.[field] ?? [];

        this.entities = this.entities.filter(entity => {
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

    withPagination() {
        this.entities = this.entities.slice(this.offset, this.limit);
        return this;
    }

    get(): T[] {
        return this.entities;
    }
}
