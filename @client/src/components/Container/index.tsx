import type { FC, ReactNode } from 'react';

interface Properties {
    readonly children?: ReactNode;
}

export const Container: FC<Properties> = ({ children }) => {
    return <div className="px-16 m-auto">{children}</div>;
};
