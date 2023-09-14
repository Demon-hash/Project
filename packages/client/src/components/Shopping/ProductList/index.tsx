import { type FC, useMemo } from 'react';
import type { Product } from 'generated';
import { twMerge } from 'tailwind-merge';
import ShopProduct from '../Product';

interface Properties {
    readonly products?: Product[];
    readonly className?: string;
    readonly minimize?: boolean;
}

const ProductList: FC<Properties> = ({ products, className, minimize }) => {
    const cached = useMemo(
        () =>
            products?.map(product => (
                <ShopProduct
                    key={product.id}
                    minimize={minimize}
                    product={product}
                />
            )),
        [products, minimize],
    );
    return <div className={twMerge(className)}>{cached}</div>;
};

export default ProductList;
