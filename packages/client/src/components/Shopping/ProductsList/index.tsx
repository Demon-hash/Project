import { type FC, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import type { Product as Generated } from 'generated';
import Product from '../Product';

interface Properties {
    readonly products?: (Partial<Generated> | null)[] | null;
    readonly className?: string;
    readonly minimize?: boolean;
}

const ProductsList: FC<Properties> = ({ products, className, minimize }) => {
    const cached = useMemo(
        () =>
            products?.map(product => (
                <Product
                    key={product?.id}
                    minimize={minimize}
                    product={product}
                />
            )),
        [products, minimize],
    );
    return <div className={twMerge(className)}>{cached}</div>;
};

export default ProductsList;
