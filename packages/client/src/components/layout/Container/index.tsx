import type { FC, ReactNode } from 'react';

interface Properties {
    readonly children?: ReactNode;
}

const Container: FC<Properties> = ({ children }) => {
    return (
        <main
            role="main"
            className="px-2 lg:px-4 xl:px-6 2xl:px-8 m-auto 3xl:w-[50%]"
        >
            {children}
        </main>
    );
};

export default Container;
