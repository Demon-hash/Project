import type { FC } from 'react';
import type { Variant } from 'shared/types';
import { useTranslation } from 'react-i18next';
import { Heading } from '../Heading';

interface Properties {
    readonly title: string;
    readonly variants: Variant[];
}

export const ListWithCount: FC<Properties> = ({ title, variants }) => {
    const { t } = useTranslation();

    return (
        <>
            <Heading title={t(title)} />
            <ul className="px-4">
                {variants.map(({ title, count }) => (
                    <li
                        className="flex items-center justify-between py-1 font-light"
                        key={title}
                    >
                        <h3 className="text-accent-foreground">{title}</h3>
                        <span className="text-right text-muted-foreground">
                            {count}
                        </span>
                    </li>
                ))}
            </ul>
        </>
    );
};
