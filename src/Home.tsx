import { Header } from 'components/Header';
import { Container } from 'components/Container';
import { CheckboxColor } from 'components/CheckboxColor';
import { Range } from 'components/Range';

export const Home = () => {
    const categories = [
        { title: 'Shirts', count: 5 },
        { title: 'Glasses', count: 21 },
        { title: 'Sneakers', count: 12 },
        { title: 'Jackets', count: 37 },
        { title: 'Boots', count: 18 },
        { title: 'Watches', count: 3 },
        { title: 'Rings', count: 8 },
        { title: 'Swimsuits', count: 7 },
    ].sort((a, b) => a.title.localeCompare(b.title));

    const brands = [
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

    return (
        <>
            <Header />
            <Container>
                <div className="bg-gray-300 h-96">Carousel</div>
                <div className="py-8 grid grid-cols-3">
                    <div className="col-span-1">
                        <h1 className="uppercase p-4 font-bold text-neutral-50 tracking-wider bg-neutral-700">
                            shop by
                        </h1>
                        <h1 className="p-4 uppercase tracking-wider">
                            Categories
                        </h1>
                        <ul className="px-4">
                            {categories.map(({ title, count }) => (
                                <li className="flex items-center justify-between py-1 font-light">
                                    <h3 className="text-neutral-950">
                                        {title}
                                    </h3>
                                    <span className="text-right text-neutral-400">
                                        {count}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <h1 className="p-4 uppercase tracking-wider">Price</h1>
                        <div className="p-4">
                            <Range defaultValue={[0, 100]} />
                        </div>

                        <h1 className="p-4 uppercase tracking-wider">
                            Sort By
                        </h1>

                        <h1 className="p-4 uppercase tracking-wider">Brands</h1>
                        <ul className="px-4">
                            {brands.map(({ title, count }) => (
                                <li className="flex items-center justify-between py-1 font-light">
                                    <h3 className="text-neutral-950">
                                        {title}
                                    </h3>
                                    <span className="text-right text-neutral-400">
                                        {count}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <h1 className="p-4 uppercase tracking-wider">Colors</h1>
                        <ul className="px-4">
                            <li>
                                <CheckboxColor variant="red" />
                            </li>
                            <li>
                                <CheckboxColor variant="green" />
                            </li>
                        </ul>
                    </div>
                </div>

                {/*<div className="grid grid-cols-3 grid-rows-2 gap-4">*/}
                {/*    <div className="bg-gray-300">01</div>*/}
                {/*    <div className="bg-gray-300">02</div>*/}
                {/*    <div className="bg-gray-300">03</div>*/}
                {/*    <div className="bg-gray-300">04</div>*/}
                {/*    <div className="bg-gray-300">05</div>*/}
                {/*    <div className="bg-gray-300">06</div>*/}
                {/*    <div className="bg-gray-300">07</div>*/}
                {/*    <div className="bg-gray-300">08</div>*/}
                {/*    <div className="bg-gray-300">09</div>*/}
                {/*</div>*/}
            </Container>
        </>
    );
};
