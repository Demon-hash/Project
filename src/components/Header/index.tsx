import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Breadcrumbs } from 'components/Breadcrumbs';
import { ROUTE } from 'constants/routers';

export const Header: FC = () => {
    const { t } = useTranslation();

    return (
        <nav className="w-100 h-12 border-b border-neutral-300 relative flex">
            <ul className="relative flex grow items-center w-100 px-4">
                <li>
                    <Breadcrumbs />
                </li>
                <li className="grow flex items-end">
                    <div className="ml-auto">
                        <Link className="text-orange-500" to={ROUTE.LOGIN}>
                            {t('route.login')}
                        </Link>
                    </div>
                </li>
            </ul>
        </nav>
    );
};
