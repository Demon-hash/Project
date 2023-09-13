import { ShoppingBasket } from 'lucide-react';
import type { FC } from 'react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'components/Button';
import { Counter } from 'components/Counter';
import type { Product } from 'graphql/generated';
import { formatNumberAsMoney } from 'utils';

interface Properties {
    readonly products?: Product[];
}

export const Products: FC<Properties> = ({ products }) => {
    const { i18n } = useTranslation();

    const cached = useMemo(() => {
        return products?.map(({ id, title, price, imageUrl, stock }) => (
            <div className="p-4" key={id}>
                <img
                    src={imageUrl}
                    alt="sweater"
                    loading="lazy"
                    className="max-h-52 m-auto"
                />
                <div className="flex items-center justify-between pt-10">
                    <h1 className="text-gray-50 text-xl font-bold">
                        {title?.[i18n.language]}
                    </h1>
                    <h1 className="text-gray-500 font-bold text-xl">
                        {formatNumberAsMoney(price)}
                    </h1>
                </div>
                <div className="flex justify-between gap-4">
                    <Counter min={1} max={stock} />
                    <Button className="w-full space-x-2">
                        Add to basket <ShoppingBasket className="mr-2" />
                    </Button>
                </div>
            </div>
        ));
    }, [products]);

    return <div className="grid grid-cols-3 gap-2 py-4">{cached}</div>;
};
