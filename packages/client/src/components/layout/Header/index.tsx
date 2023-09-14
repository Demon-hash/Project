import { Menu } from 'lucide-react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PATHS from 'paths';

const Header: FC = () => {
    const { t } = useTranslation();
    const categories = [
        { title: 'women', url: PATHS.WOMEN },
        { title: 'men', url: PATHS.MEN },
        {
            title: 'children',
            url: PATHS.CHILDREN,
        },
    ].map(({ title, url }) => (
        <Link
            className="text-primary-foreground ml-5 font-light"
            to={url}
            key={url}
        >
            {t(`categories.${title}`)}
        </Link>
    ));

    return (
        <header className="w-100 border-b border-foreground sticky top-0 bg-background z-50">
            <nav className="flex h-12 relative">
                <ul className="relative flex grow items-center w-100 px-2 lg:px-4 xl:px-6 2xl:px-8">
                    <li>
                        <Link to={PATHS.HOME}>MY WEBSHOP PROJECT NAME</Link>
                    </li>
                    <li className="grow flex items-end">
                        <Menu className="block lg:hidden ml-auto" />
                        <div className="hidden lg:block ml-auto">
                            {categories}
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
