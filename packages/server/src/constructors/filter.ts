import type {
    InputMaybe,
    InputProductsFilter,
    QueryProductsArgs,
} from '../generated/graphql';

export class Filter<T> {
    private entities: T[];
    private readonly filter: InputMaybe<InputProductsFilter>;
    private readonly limit: number;
    private readonly offset: number;

    constructor(entities: T[], { filter }: Partial<QueryProductsArgs>) {
        this.entities = entities;
        this.filter = filter;
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

        this.entities = this.entities.filter(product => {
            return data.length
                ? product?.[field]?.some(v => data.includes(v.value))
                : true;
        });
        return this;
    }

    byRange(field: string, defaults = [0, Infinity]) {
        const price = [
            this.filter?.price?.[0] ?? defaults[0],
            this.filter?.price?.[1] ?? defaults[1],
        ];

        this.entities = this.entities.filter(entity => {
            return entity?.[field] >= price[0] && entity?.[field] <= price[1];
        });
        return this;
    }

    withPagination() {
        this.entities = this.entities.slice(this.offset, this.limit);
        return this;
    }

    get() {
        return this.entities;
    }
}
