import type { Variant } from 'shared/types';
import { useTranslation } from 'react-i18next';
import { ListWithCount } from './ListWithCount';
import { PriceRange } from './PriceRange';
import { VariantsList } from './VariantsList';

export const ShopFilters = () => {
    const { t } = useTranslation();

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
            <h1 className="uppercase p-4 font-bold text-accent tracking-wider bg-primary">
                {t('shop.by')}
            </h1>
            <ListWithCount title="shop.categories" variants={categories} />
            <ListWithCount title="shop.brands" variants={brands} />
            <PriceRange title="shop.price" />
            <VariantsList title="shop.sort" i18key="sort" variants={sort} />
            <VariantsList title="shop.sizes" i18key="size" variants={sizes} />
            <VariantsList
                title="shop.materials"
                i18key="material"
                variants={materials}
            />
            <VariantsList
                asColorList
                title="shop.colors"
                i18key="colors"
                variants={colors}
            />
        </>
    );
};
