import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import type { Color, Product } from 'generated';
import { twMerge } from 'tailwind-merge';
import { VARIANT_COLORS } from 'shared/variant-colors.ts';

interface Properties {
    readonly product: Product;
    readonly minimize?: boolean;
}

const ShopProduct: FC<Properties> = ({
    product: { id, title, description, price, imageUrl, stock, color },
    minimize,
}) => {
    const { t } = useTranslation();

    const _colors = (color: Color[]) => (
        <div className="flex items-center justify-center my-4 space-x-2">
            {color?.map(({ value }) => (
                <div
                    className={twMerge(
                        VARIANT_COLORS?.[value],
                        'h-4 w-4 rounded-full',
                    )}
                ></div>
            ))}
        </div>
    );

    const _sizes = (size: string[]) => (
        <div className="flex items-center my-4 space-x-2">
            {size?.map(val => (
                <div className="border border-border px-2 rounded-sm">
                    {val}
                </div>
            ))}
        </div>
    );

    return (
        <div className="p-4 relative col-span-1" key={id}>
            {/*<div className="absolute bg-orange-600 px-2 rounded-sm text-white">*/}
            {/*    -50%*/}
            {/*</div>*/}
            {/*<h1 className="absolute right-0 text-cyan-400 tracking-widest font-light">*/}
            {/*    NEW*/}
            {/*</h1>*/}
            <img
                src={imageUrl}
                alt="sweater"
                loading="lazy"
                className="max-h-52 m-auto"
            />
            {_colors(color)}
            <div className="my-4">
                <h1 className="text-gray-50 text-2xl font-bold w-full">
                    {title}
                </h1>
                <p className="my-2 truncate">{description}</p>
                {_sizes(['36', '38', '40', '42', '44'])}
            </div>
            {/*<div className="flex items-center justify-between">*/}
            {/*    <Counter min={1} max={stock} className="" />*/}
            {/*    <Button className="w-1/3 m-auto">*/}
            {/*        <span>{t('cart.add')}</span>*/}
            {/*    </Button>*/}
            {/*</div>*/}

            {/*<p className="text-gray-500 font-bold text-xl text-center">*/}
            {/*    {formatNumberAsMoney(price)}*/}
            {/*</p>*/}
        </div>
    );
};

export default ShopProduct;
