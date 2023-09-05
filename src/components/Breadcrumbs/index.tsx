import type { FC } from 'react';
import { Link, useMatches } from 'react-router-dom';

export const Breadcrumbs: FC = () => {
    const matches = useMatches();
    const breadcrumbs = matches
        .filter(match => Boolean(match.handle?.crumb))
        .map(match => match.handle.crumb(match.data));

    const len = breadcrumbs.length - 1;

    return (
        <ul className="flex">
            {breadcrumbs.map(({ props: { to, children } }, index) => (
                <li
                    key={to}
                    className="text-lg text-neutral-950 text-center flex"
                >
                    <h1>
                        <Link to={to}>{children}</Link>
                    </h1>
                    {index < len ? <span className="px-2">/</span> : ''}
                </li>
            ))}
        </ul>
    );
};
