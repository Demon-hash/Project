import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { LINKS, PARAMS } from 'links';
import Button from 'components/interactive/Button';
import CountSelection from 'components/interactive/CountSelection';
import SizesList from 'components/shopping/SizesList';
import type { Product as Generated } from 'generated';
import { formatNumberAsMoney } from 'utils';
import ColorsList from '../ColorsList';

interface Properties {
    readonly product?: Partial<Generated> | null;
    readonly minimize?: boolean;
}

const Product: FC<Properties> = ({ product, minimize }) => {
    const { id, title, description, price, imageUrl, stock, color, size } =
        product ?? {};
    const { t } = useTranslation();
    const navigate = useNavigate();
    const link = LINKS.PRODUCT.replace(PARAMS.product, id ?? '');

    return (
        <div
            key={id}
            className="p-4 relative col-span-1 cursor-pointer hover:shadow-2xl"
            onClick={() => navigate(link)}
        >
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
            <ColorsList centred colors={color} />
            <div className="my-4">
                <h1 className="text-gray-50 text-2xl font-bold w-full">
                    {title}
                </h1>
                <p className="my-2 truncate">{description}</p>
            </div>
            <SizesList sizes={size} />
            {!minimize && (
                <>
                    <div className="flex items-center justify-between">
                        <CountSelection min={1} max={stock} className="" />
                        <Button className="w-1/3 m-auto">
                            <span>{t('cart.add')}</span>
                        </Button>
                    </div>

                    {price && (
                        <p className="text-gray-500 font-bold text-xl text-center">
                            {formatNumberAsMoney(price)}
                        </p>
                    )}
                </>
            )}
        </div>
    );
};

export default Product;
