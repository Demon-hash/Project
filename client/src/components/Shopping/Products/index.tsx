import { ShoppingBasket } from 'lucide-react';
import Sweater from 'assets/sweater.png';
import { Button } from 'components/Button';
import { Counter } from 'components/Counter';
import { formatNumberAsMoney } from 'utils';

export const Products = () => {
    return (
        <div className="grid grid-cols-3 gap-2 py-4">
            <div className="grow p-4">
                <img src={Sweater} alt="sweater" />
                <h1 className="text-gray-50 text-xl font-bold pt-5">
                    Button Placket Sweater
                </h1>
                <p className="py-2 text-gray-500 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <p className="py-2 text-gray-500 font-bold text-xl">
                    {formatNumberAsMoney(154)}
                </p>
                <div className="flex justify-between gap-4">
                    <Counter min={1} max={100} />
                    <Button className="w-full">
                        Add to basket <ShoppingBasket className="mr-2" />
                    </Button>
                </div>
            </div>
            <div className="border border-border grow h-16">j</div>
            <div className="border border-border grow h-16">j</div>
        </div>
    );
};
