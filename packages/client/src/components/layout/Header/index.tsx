import { ShoppingCart } from 'lucide-react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { LINKS } from 'links';
import { useGetCartProductsCountQuery } from 'generated';

const Header: FC = () => {
    const { i18n } = useTranslation();
    const { data } = useGetCartProductsCountQuery({
        variables: {
            locale: i18n.language,
            filter: {
                id: 'test',
            },
        },
    });

    const count =
        data?.carts?.reduce(
            (final, entity) =>
                final +
                (entity?.items?.reduce(
                    (acc, cur) => acc + (cur?.count ?? 0),
                    0,
                ) ?? 0),
            0,
        ) ?? 0;

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
                        <Link
                            to={LINKS.CART}
                            className="ml-auto relative right-3"
                        >
                            <ShoppingCart />
                            {!!count && (
                                <div className="bg-red-600 absolute rounded-sm text-sm text-center -right-3 -top-1 px-1">
                                    {count}
                                </div>
                            )}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
