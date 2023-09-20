import type { UseFormWatch } from 'react-hook-form';
import type { ShopFilters } from 'zod-schemas/shop-filters.ts';

export default function normalize(data: UseFormWatch<ShopFilters>, limit = 9) {
    return Object.entries(data()).reduce(
        (acc, [key, list]) => {
            return {
                ...acc,
                [key]: list.map(({ value }) => value),
            };
        },
        {
            limit,
        },
    );
}
