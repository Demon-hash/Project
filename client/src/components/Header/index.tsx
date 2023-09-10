import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ROUTE } from 'constants/routers';

export const Header: FC = () => {
    const { t } = useTranslation();
    const categories = [
        { title: 'women', url: ROUTE.WOMEN },
        { title: 'men', url: ROUTE.MEN },
        {
            title: 'children',
            url: ROUTE.CHILDREN,
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
        <nav className="w-100 h-12 border-b border-foreground relative flex">
            <ul className="relative flex grow items-center w-100 px-16">
                <li className="grow flex items-end">
                    <div className="ml-auto">{categories}</div>
                </li>
            </ul>
        </nav>
    );
};
