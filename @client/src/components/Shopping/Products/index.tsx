import { ShoppingBasket } from 'lucide-react';
import type { FC } from 'react';
import { Button } from 'components/Button';
import { Counter } from 'components/Counter';
import type { Product } from 'graphql/generated';
import { formatNumberAsMoney } from 'utils';

interface Properties {
    readonly products?: Product[];
}

export const Products: FC<Properties> = ({ products }) => {
    return (
        <div className="grid grid-cols-3 gap-2 py-4">
            {products?.map(({ title, price, imageUrl, stock }) => (
                <div className="grow p-4">
                    <img src={imageUrl} alt="sweater" loading="lazy" />
                    <h1 className="text-gray-50 text-xl font-bold pt-5">
                        {title['en']}
                    </h1>
                    <p className="py-2 text-gray-500 font-light">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </p>
                    <p className="py-2 text-gray-500 font-bold text-xl">
                        {formatNumberAsMoney(price)}
                    </p>
                    <div className="flex justify-between gap-4">
                        <Counter min={1} max={stock} />
                        <Button className="w-full">
                            Add to basket <ShoppingBasket className="mr-2" />
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
};
