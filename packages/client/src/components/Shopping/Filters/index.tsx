import { useDeferredValue } from 'react';
import { Form } from 'react-hook-form';
import { Breadcrumbs } from 'components/Breadcrumbs';
import { useGetProductQuery } from 'graphql/generated';
import { useFiltersForm } from 'hooks/forms/use-filters-form';
import type { ShopFilters } from 'schemas/shop-filters';
import type { Variant } from 'shared/types';
import { Products } from '../Products';
import { ListWithCount } from './ListWithCount';
import { PriceRange } from './PriceRange';
import { VariantsList } from './VariantsList';

export const Filters = () => {
    const { control, watch } = useFiltersForm();
    const updated = useDeferredValue(watch());
    const { data } = useGetProductQuery(updated);

    const categories: Variant[] = [
        { title: 'Shirts', count: 5 },
        { title: 'Glasses', count: 21 },
        { title: 'Sneakers', count: 12 },
        { title: 'Jackets', count: 37 },
        { title: 'Boots', count: 18 },
        { title: 'Watches', count: 3 },
        { title: 'Rings', count: 8 },
        { title: 'Swimsuits', count: 7 },
    ].sort((a, b) => a.title.localeCompare(b.title));

    const brands: Variant[] = [
        { title: 'Gucci', count: 5 },
        { title: 'Dior', count: 5 },
        { title: 'Louis Vuitton', count: 5 },
        { title: 'Prada', count: 5 },
        { title: 'Balenciaga', count: 5 },
        { title: 'Moncler', count: 5 },
        { title: 'Saint Laurent', count: 5 },
        { title: 'Armani', count: 5 },
        { title: 'Versace', count: 5 },
        { title: 'Burberry', count: 5 },
    ].sort((a, b) => a.title.localeCompare(b.title));

    const materials = [
        'synthetic',
        'wool',
        'linen',
        'denim',
        'leather',
        'silk',
        'chiffon',
        'other',
    ];

    const sizes = ['xs', 's', 'm', 'l', 'xl', 'xxl'];
    const sort = ['popularity', 'rating', 'newness', 'price'];
    const colors = [
        'red',
        'orange',
        'yellow',
        'green',
        'sky',
        'blue',
        'violet',
        'purple',
        'pink',
        'white',
        'gray',
        'black',
    ];

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
                            variants={categories}
                        />
                        <ListWithCount<ShopFilters>
                            title="shop.brands"
                            name="brand"
                            control={control}
                            variants={brands}
                        />
                        <PriceRange<ShopFilters>
                            title="shop.price"
                            name="price"
                            control={control}
                        />
                        <VariantsList<ShopFilters>
                            title="shop.sort"
                            i18key="sort"
                            name="sort"
                            control={control}
                            variants={sort}
                        />
                        <VariantsList<ShopFilters>
                            title="shop.sizes"
                            i18key="size"
                            name="size"
                            control={control}
                            variants={sizes}
                        />
                        <VariantsList<ShopFilters>
                            title="shop.materials"
                            i18key="material"
                            name="material"
                            control={control}
                            variants={materials}
                        />
                        <VariantsList<ShopFilters>
                            asColorList
                            title="shop.colors"
                            i18key="colors"
                            name="color"
                            control={control}
                            variants={colors}
                        />
                    </Form>
                </div>
                <div className="col-span-2 ml-4">
                    <div className="uppercase p-4 font-bold text-primary-foreground tracking-wider bg-primary h-14"></div>
                    <Products products={data?.products} />
                </div>
            </div>
        </>
    );
};
