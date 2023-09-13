import * as z from 'zod';

export const initialShopFiltersSchema: ShopFilters = {
    category: [],
    brand: [],
    price: [],
    sort: [],
    size: [],
    material: [],
    color: [],
};

export const shopFiltersSchema = z.object({
    category: z.array(z.object({ value: z.string() })),
    brand: z.array(z.object({ value: z.string() })),
    price: z.array(z.object({ value: z.string() })),
    sort: z.array(z.object({ value: z.string() })),
    size: z.array(z.object({ value: z.string() })),
    material: z.array(z.object({ value: z.string() })),
    color: z.array(z.object({ value: z.string() })),
});

export type ShopFilters = z.infer<typeof shopFiltersSchema>;
