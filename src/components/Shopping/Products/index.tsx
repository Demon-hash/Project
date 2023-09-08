import Sweater from 'assets/sweater.png';
import { Button } from 'components/Button';

export const Products = () => {
    return (
        <div className="grid grid-cols-3 gap-2 py-4">
            <div className="grow p-4">
                <img src={Sweater} alt="sweater" />
                <h1 className="text-gray-50 text-xl font-bold pt-5">
                    Button Placket Sweater
                </h1>
                <p className="py-2 text-gray-700 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <Button>Add to cart</Button>
            </div>
            <div className="border border-border grow h-16">j</div>
            <div className="border border-border grow h-16">j</div>
        </div>
    );
};
