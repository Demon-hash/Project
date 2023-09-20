import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Carousel from 'components/layout/Carousel';
import Category from 'components/layout/Category';
import Container from 'components/layout/Container';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import Section from 'components/layout/Section';
import ProductList from 'components/shopping/ProductList';
import { useGetHomepageDataQuery } from 'generated';

const Home: FC = () => {
    const { t, i18n } = useTranslation();
    const { data } = useGetHomepageDataQuery({
        variables: {
            locale: i18n.language,
            categories: {
                limit: 3,
            },
            products: {
                limit: 8,
            },
        },
    });

    return (
        <>
            <Header />
            <Container>
                <Carousel />
                <Section
                    title={t('home.headers.0.title')}
                    desc={t('home.headers.0.desc')}
                />
                <section className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:gap-3 xl:gap-4 sm:h-[calc(theme(height.64)*2)] sm:max-h-[calc(theme(height.64)*2)]">
                    <div className="relative col-span-1 bg-gradient-to-r from-purple-600 to-blue-600 h-full overflow-y-hidden rounded-sm">
                        <Category largeImage category={data?.categories?.[0]} />
                    </div>
                    <div className="col-span-1 flex justify-between flex-col gap-2 lg:gap-3 xl:gap-4">
                        <div className="relative grow h-64 max-h-64 bg-gradient-to-r from-purple-600 to-blue-600 overflow-y-hidden rounded-sm">
                            <Category category={data?.categories?.[1]} />
                        </div>
                        <div className="relative grow h-64 max-h-64 bg-gradient-to-r from-purple-600 to-blue-600 overflow-y-hidden rounded-sm">
                            <Category category={data?.categories?.[2]} />
                        </div>
                    </div>
                </section>
                <Section
                    title={t('home.headers.1.title')}
                    desc={t('home.headers.1.desc')}
                />
                <ProductList
                    minimize
                    className="grid gap-2 lg:gap-3 xl:gap-4 2xl:grid-cols-4 grid-cols-1 md:grid-cols-2"
                    products={data?.products}
                />
            </Container>
            <Footer />
        </>
    );
};
export default Home;
