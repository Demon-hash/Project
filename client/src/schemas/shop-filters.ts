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
    category: z.array(z.object({ value: z.string() })).optional(),
    brand: z.array(z.object({ value: z.string() })).optional(),
    price: z.array(z.object({ value: z.string() })).optional(),
    sort: z.array(z.object({ value: z.string() })).optional(),
    size: z.array(z.object({ value: z.string() })).optional(),
    material: z.array(z.object({ value: z.string() })).optional(),
    color: z.array(z.object({ value: z.string() })).optional(),
});

export type ShopFilters = z.infer<typeof shopFiltersSchema>;
