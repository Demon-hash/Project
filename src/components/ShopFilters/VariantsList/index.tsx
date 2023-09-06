import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Checkbox } from 'components/Checkbox';
import { Heading } from '../Heading';

interface Properties {
    i18key: string;
    title: string;
    variants: string[];
    asColorList?: boolean;
}

export const VariantsList: FC<Properties> = ({
    title,
    i18key,
    variants,
    asColorList,
}) => {
    const { t } = useTranslation();

    return (
        <>
            <Heading title={t(title)} />
            <ul className="px-4 grid lg:grid-cols-3 xl:grid-cols-4 gap-2">
                {variants.map(variant => (
                    <li
                        className="flex items-center justify-between py-1 font-light"
                        key={variant}
                    >
                        <Checkbox
                            id={variant}
                            variant={asColorList ? variant : undefined}
                            title={t(`${i18key}.${variant}`)}
                        />
                    </li>
                ))}
            </ul>
        </>
    );
};
