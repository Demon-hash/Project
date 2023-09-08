import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Range } from 'components/Range';

import { Heading } from '../Heading';

interface Properties {
    readonly title: string;
}

export const PriceRange: FC<Properties> = ({ title }) => {
    const { t } = useTranslation();

    return (
        <>
            <Heading title={t(title)} />
            <div className="p-4">
                <Range defaultValue={[0, 100]} />
            </div>
        </>
    );
};
