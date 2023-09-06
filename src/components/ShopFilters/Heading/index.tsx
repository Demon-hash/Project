import type { FC } from 'react';

interface Properties {
    readonly title: string;
}

export const Heading: FC<Properties> = ({ title }) => {
    return (
        <h1 className="p-4 uppercase tracking-wider text-important-foreground">
            {title}
        </h1>
    );
};
