export type Normalize<T, P> = {
    [K in keyof T]: T[K];
} & Partial<P>;

export type WithOffset<T> = Normalize<
    T,
    {
        offset: number;
        limit: number;
    }
>;
