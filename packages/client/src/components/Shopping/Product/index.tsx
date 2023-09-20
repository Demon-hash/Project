import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import Button from 'components/interactive/Button';
import CountSelection from 'components/interactive/CountSelection';
import type { Product as Generated } from 'generated';
import { VARIANT_COLORS } from 'shared/variant-colors.ts';
import { formatNumberAsMoney } from 'utils';

interface Properties {
    readonly product?: Partial<Generated> | null;
    readonly minimize?: boolean;
}

const Product: FC<Properties> = ({ product, minimize }) => {
    const { t } = useTranslation();
    const { id, title, description, price, imageUrl, stock, color } =
        product ?? {};

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
            <div className="flex items-center justify-center my-4 space-x-2">
                {color?.map(({ value }) => (
                    <div
                        className={twMerge(
                            VARIANT_COLORS?.[
                                value as keyof typeof VARIANT_COLORS
                            ],
                            'h-4 w-4 rounded-full',
                        )}
                    ></div>
                ))}
            </div>
            <div className="my-4">
                <h1 className="text-gray-50 text-2xl font-bold w-full">
                    {title}
                </h1>
                <p className="my-2 truncate">{description}</p>
                <div className="flex items-center my-4 space-x-2">
                    {['36', '38', '40', '42', '44']?.map(val => (
                        <div
                            key={val}
                            className="border border-border px-2 rounded-sm"
                        >
                            {val}
                        </div>
                    ))}
                </div>
            </div>
            {!minimize && (
                <>
                    <div className="flex items-center justify-between">
                        <CountSelection min={1} max={stock} className="" />
                        <Button className="w-1/3 m-auto">
                            <span>{t('cart.add')}</span>
                        </Button>
                    </div>

                    <p className="text-gray-500 font-bold text-xl text-center">
                        {formatNumberAsMoney(price)}
                    </p>
                </>
            )}
        </div>
    );
};

export default Product;
