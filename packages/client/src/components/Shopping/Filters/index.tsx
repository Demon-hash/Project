import { type FC, useDeferredValue } from 'react';
import { Form } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useGetProductsQuery, useGetShopFiltersQuery } from 'generated';
import type { ShopFilters } from 'zod-schemas/shop-filters';
import { Breadcrumbs } from 'components/Breadcrumbs';
import ProductList from 'components/Shopping/ProductList';
import { useShopFiltersForm } from 'hooks/forms/use-shop-filters-form';
import { ListWithCount } from './ListWithCount';
import { PriceRange } from './PriceRange';
import { VariantsList } from './VariantsList';

interface Properties {
    readonly category: string;
}

const Filters: FC<Properties> = ({ category }) => {
    const { control, watch } = useShopFiltersForm();
    const { i18n } = useTranslation();

    const { data } = useGetProductsQuery({
        variables: {
            locale: i18n.language,
            filter: useDeferredValue(
                Object.entries(watch()).reduce(
                    (acc, [key, list]) => {
                        return {
                            ...acc,
                            [key]: list.map(({ value }) => value),
                        };
                    },
                    {
                        limit: 9,
                    },
                ),
            ),
        },
    });

    const { data: filters } = useGetShopFiltersQuery();

    return (
        <>
            <div className="py-8 grid grid-cols-3">
                <div className="col-span-1">
                    <h1 className="uppercase p-4 font-bold text-accent tracking-wider bg-primary h-14">
                        <Breadcrumbs />
                    </h1>
                    <Form control={control}>
                        <ListWithCount<ShopFilters>
                            title="shop.categories"
                            name="category"
                            control={control}
                            variants={filters?.categories}
                        />
                        <ListWithCount<ShopFilters>
                            title="shop.brands"
                            name="brand"
                            control={control}
                            variants={filters?.brands}
                        />
                        <PriceRange<ShopFilters>
                            title="shop.price"
                            name="price"
                            control={control}
                        />
                        <VariantsList<ShopFilters>
                            title="shop.sort"
                            name="sort"
                            control={control}
                            variants={filters?.sort}
                        />
                        <VariantsList<ShopFilters>
                            title="shop.sizes"
                            name="size"
                            control={control}
                            variants={filters?.sizes}
                        />
                        <VariantsList<ShopFilters>
                            title="shop.materials"
                            name="material"
                            control={control}
                            variants={filters?.materials}
                        />
                        <VariantsList<ShopFilters>
                            asColorList
                            title="shop.colors"
                            name="color"
                            control={control}
                            variants={filters?.colors}
                        />
                    </Form>
                </div>
                <div className="col-span-2 ml-4">
                    <div className="uppercase p-4 font-bold text-primary-foreground tracking-wider bg-primary h-14"></div>
                    <ProductList
                        className="grid grid-cols-3 gap-2 py-4"
                        products={data?.products}
                    />
                </div>
            </div>
        </>
    );
};

export default Filters;
