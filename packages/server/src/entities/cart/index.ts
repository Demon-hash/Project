export interface Cart {
    readonly id: string;
    readonly products: {
        readonly id: string;
        readonly count: number;
    }[];
}

export const CART = ({ id, products }: Cart) => ({
    id,
    products,
});

export const carts: ReturnType<typeof CART>[] = [];
