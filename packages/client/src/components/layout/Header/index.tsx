import { ShoppingCart, User2 } from 'lucide-react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { LINKS } from 'links';
import { useAppSelector } from 'storage';
import { selectCartProducts } from 'storage/cart';

const Header: FC = () => {
    const products = useAppSelector(selectCartProducts) ?? [];
    const count = products.reduce((acc, cur) => acc + (cur?.count ?? 0), 0);

    return (
        <header
            role="banner"
            className="w-100 border-b border-foreground sticky top-0 bg-background z-50"
        >
            <nav className="flex h-12 relative m-auto 3xl:w-[50%]">
                <ul className="relative flex grow items-center w-100 px-2 lg:px-5 xl:px-6 2xl:px-9">
                    <li>
                        <Link to={LINKS.HOME}>MY SHOP NAME</Link>
                    </li>
                    <li className="grow flex items-end">
                        <section className="ml-auto relative right-3 flex gap-4">
                            <User2 />
                            <Link to={LINKS.CART}>
                                <ShoppingCart />
                                {!!count && (
                                    <div className="bg-red-600 absolute rounded-sm text-sm text-center -right-3 -top-1 px-1">
                                        {count > 9 ? '9+' : count}
                                    </div>
                                )}
                            </Link>
                        </section>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
