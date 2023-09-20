import type { FC } from 'react';

interface Properties {
    readonly title: string;
}

const Heading: FC<Properties> = ({ title }) => {
    return (
        <h1 className="p-4 uppercase tracking-wider text-important-foreground">
            {title}
        </h1>
    );
};

export default Heading;
