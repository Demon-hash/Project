import { type FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { Color, Product } from 'generated';
import { twMerge } from 'tailwind-merge';
import { Button } from 'components/Button';
import { Counter } from 'components/Counter';
import { VARIANT_COLORS } from 'shared/variant-colors.ts';
import { formatNumberAsMoney } from 'utils';

interface Properties {
    readonly products?: Product[];
}

export const Products: FC<Properties> = ({ products }) => {
    const { t, i18n } = useTranslation();

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
                <div className="border border-border px-2">{val}</div>
            ))}
        </div>
    );

    const cached = useMemo(() => {
        return products?.map(({ id, title, price, imageUrl, stock, color }) => (
            <div className="p-4 relative" key={id}>
                <div className="absolute bg-orange-600 px-2 rounded-sm text-white">
                    -50%
                </div>
                <h1 className="absolute right-0 text-cyan-400 tracking-widest font-light">
                    NEW
                </h1>
                <img
                    src={imageUrl}
                    alt="sweater"
                    loading="lazy"
                    className="max-h-52 m-auto"
                />
                {_colors(color)}
                <div className="my-4">
                    <h1 className="text-gray-50 text-2xl font-bold w-full">
                        {title?.[i18n.language]}
                    </h1>
                    {_sizes(['36', '38', '40', '42', '44'])}
                    <p className="my-2">
                        Lightweight summer running shoes with good grip
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <Counter min={1} max={stock} className="" />
                    <Button className="w-1/3 m-auto">
                        <span>{t('cart.add')}</span>
                    </Button>
                </div>

                {/*<p className="text-gray-500 font-bold text-xl text-center">*/}
                {/*    {formatNumberAsMoney(price)}*/}
                {/*</p>*/}
            </div>
        ));
    }, [products]);

    return <div className="grid grid-cols-3 gap-2 py-4">{cached}</div>;
};
