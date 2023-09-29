import { type FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import type { RootState } from 'storage';
import { setId } from 'storage/slices/cart.ts';
import Button from 'components/interactive/Button';
import CountSelection from 'components/interactive/CountSelection';
import Container from 'components/layout/Container';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import ColorsList from 'components/shopping/ColorsList';
import SizesList from 'components/shopping/SizesList';
import { useAddItemInCartMutation, useGetProductDataQuery } from 'generated';
import { formatNumberAsMoney } from 'utils';

const Product: FC = () => {
    const storage = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    const { productId: id } = useParams();
    const { i18n } = useTranslation();

    const { data, loading } = useGetProductDataQuery({
        variables: {
            locale: i18n.language,
            products: {
                id,
            },
        },
    });

    const product = data?.products?.[0];
    const [addCartItem, { data: cart }] = useAddItemInCartMutation({
        variables: {
            id: storage?.id ?? '',
            products: [
                {
                    id: product?.id ?? '',
                    count: 1,
                },
            ],
        },
    });

    useEffect(() => {
        if (cart === null || cart === undefined) {
            return;
        }
        dispatch(setId(cart.addCartProducts));
    }, [dispatch, cart]);

    return (
        <>
            <Header />
            <Container>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <section>
                        <div className="flex justify-center my-4">
                            <section className="w-1/3">
                                <img
                                    src={product?.imageUrl}
                                    alt={product?.title ?? '*'}
                                    loading="lazy"
                                />
                            </section>
                            <section className="w-1/3 ml-16">
                                <h1 className="font-bold text-2xl uppercase tracking-wide">
                                    {product?.title}
                                </h1>
                                <h3 className="my-2 text-lg font-bold tracking-widest">
                                    {formatNumberAsMoney(product?.price)}
                                </h3>
                                <section className="my-4">
                                    <hr />
                                    <p className="my-4 font-light">
                                        {product?.description}
                                    </p>
                                    <hr />
                                </section>
                                <section>
                                    <h1 className="text-md font-bold uppercase tracking-widest">
                                        Variants
                                    </h1>
                                    <ColorsList colors={product?.color} />
                                </section>
                                <section>
                                    <h1 className="text-md font-bold uppercase tracking-widest">
                                        Sizes
                                    </h1>
                                    <SizesList sizes={product?.size} />
                                </section>
                                <CountSelection min={1} max={product?.stock} />
                                <Button onClick={() => addCartItem()}>
                                    Add to Cart
                                </Button>
                            </section>
                        </div>
                    </section>
                )}
            </Container>
            <Footer />
        </>
    );
};

export default Product;
