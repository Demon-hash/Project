import { type FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'storage';
import { update } from 'storage/product';
import Container from 'components/layout/Container';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import AddProductInCart from 'components/shopping/AddProductInCart';
import ColorsList from 'components/shopping/ColorsList';
import SizesList from 'components/shopping/SizesList';
import { useGetProductDataQuery } from 'generated';
import { formatNumberAsMoney } from 'utils';

const Product: FC = () => {
    const dispatch = useAppDispatch();
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

    useEffect(() => {
        if (loading) {
            return;
        }

        dispatch(update(product));
    }, [product, loading, dispatch]);

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
                                <AddProductInCart product={product} />
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
