import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    type ShopFilters,
    initialShopFiltersSchema,
    shopFiltersSchema,
} from 'zod-schemas/shop-filters';

export const useShopFiltersForm = () => {
    const { watch, control } = useForm<ShopFilters>({
        defaultValues: initialShopFiltersSchema,
        mode: 'onTouched',
        resolver: zodResolver(shopFiltersSchema),
    });

    return {
        control,
        watch,
    };
};
