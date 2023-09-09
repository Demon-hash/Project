import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { ShopFilters } from 'schemas/shop-filters';
import {
    initialShopFiltersSchema,
    shopFiltersSchema,
} from 'schemas/shop-filters';

export const useFiltersForm = (cb?: SubmitHandler<ShopFilters>) => {
    const {
        watch,
        handleSubmit: handle,
        control,
        formState: { isValid },
    } = useForm<ShopFilters>({
        defaultValues: initialShopFiltersSchema,
        mode: 'onTouched',
        resolver: zodResolver(shopFiltersSchema),
    });

    return {
        submit: handle(cb),
        control,
        isValid,
        watch,
    };
};
