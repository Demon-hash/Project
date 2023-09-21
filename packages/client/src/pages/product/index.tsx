import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import CountSelection from 'components/interactive/CountSelection';
import Container from 'components/layout/Container';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import ColorsList from 'components/shopping/ColorsList';
import SizesList from 'components/shopping/SizesList';
import { useGetProductDataQuery } from 'generated';
import { formatNumberAsMoney } from 'utils';

const Product: FC = () => {
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

    return (
        <>
            <Header />
            <Container>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div className="flex justify-between">
                        <section className="w-1/3 m-auto">
                            <img
                                src={product?.imageUrl}
                                alt={product?.title ?? '*'}
                            />
                        </section>
                        <section className="w-1/3">
                            <p className="font-light">
                                <span className="uppercase">
                                    Product Code:{' '}
                                </span>
                                <span>{product?.id}</span>
                            </p>
                            <h1 className="font-bold text-2xl uppercase tracking-wide">
                                {product?.title}
                            </h1>
                            <p className="my-4 font-light">
                                {product?.description}
                            </p>

                            <section>
                                <h2 className="font-bold text-md uppercase">
                                    Color Available
                                </h2>
                                <ColorsList colors={product?.color} />
                            </section>

                            <section>
                                <h2 className="font-bold text-md uppercase">
                                    Size Available
                                </h2>
                                <SizesList sizes={product?.size} />
                            </section>
                            <h3 className="text-lg font-bold tracking-widest">
                                {formatNumberAsMoney(product?.price)}
                            </h3>
                            <CountSelection min={1} max={product?.stock} />
                        </section>
                    </div>
                )}
            </Container>
            <Footer />
        </>
    );
};

export default Product;
