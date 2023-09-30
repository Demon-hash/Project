import { type FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'storage';
import { update } from 'storage/cart';
import Button from 'components/interactive/Button';
import CountSelection from 'components/interactive/CountSelection';
import { type Product, useAddItemInCartMutation } from 'generated';

interface Properties {
    readonly product?: Product | null;
}

const AddProductInCart: FC<Properties> = ({ product }) => {
    const cart = useAppSelector(state => state.cart);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const [count, setCount] = useState(1);

    const [addCartItem, { data, loading, error }] = useAddItemInCartMutation({
        variables: {
            id: cart?.id ?? '',
            products: [
                {
                    id: product?.id ?? '',
                    count,
                },
            ],
        },
    });

    useEffect(() => {
        if (loading || !!error) {
            return;
        }

        dispatch(update(data?.addCartProducts));
    }, [data, dispatch, error, loading]);

    return (
        <section className="flex justify-between gap-4">
            <CountSelection
                min={1}
                max={product?.stock}
                onValueChange={value => setCount(value)}
            />
            <Button className="grow" onClick={() => addCartItem()}>
                {t('cart.add')}
            </Button>
        </section>
    );
};

export default AddProductInCart;
