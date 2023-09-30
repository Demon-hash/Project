export type Normalize<T, P> = {
    [K in keyof T]: T[K];
} & Partial<P>;

export type Paginated<T> = Normalize<
    T,
    {
        offset: number;
        limit: number;
    }
>;
