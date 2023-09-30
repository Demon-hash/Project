import type { Localization, Product } from 'generated';
import type { PRODUCT } from '../../entities/product';

export const translate = (field: object, locale: string): string =>
    field?.[locale] ?? field?.['en'] ?? `Provide localization for ${locale}`;
export const translateArray = (
    group: { title: Localization }[],
    locale: string,
) => {
    return group.map(({ title, ...rest }) => ({
        title: translate(title, locale),
        ...rest,
    }));
};

export const product = (
    product: ReturnType<typeof PRODUCT>,
    locale: string,
): Product => {
    const {
        title,
        description,
        material,
        brand,
        category,
        color,
        size,
        type,
        ...rest
    } = product;

    return {
        title: translate(title, locale),
        description: translate(description, locale),
        color: translateArray(color, locale),
        material: translateArray(material, locale),
        brand: translateArray(brand, locale),
        category: translateArray(category, locale),
        size: translateArray(size, locale),
        type: translateArray(type, locale),
        ...rest,
    };
};
