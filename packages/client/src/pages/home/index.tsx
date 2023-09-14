import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetHomepageDataQuery } from 'generated';
import { twMerge } from 'tailwind-merge';
import Carousel from 'components/Carousel';
import { Products } from 'components/Shopping/Products';
import Container from 'components/layout/Container';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import Section from 'components/layout/Section';

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

    const WithTag = ({ category, isFirst }) => {
        const { title = '*', imageUrl = '' } = category ?? {};
        return (
            <>
                <img
                    src={imageUrl}
                    alt={title}
                    loading="lazy"
                    className={twMerge(
                        'm-auto',
                        isFirst
                            ? 'max-h-[calc(theme(height.64)*2)]'
                            : 'max-h-64',
                    )}
                />
                <div className="absolute bg-white text-foreground top-2 left-2 lg:top-4 lg:left-4 rounded-sm px-3 py-2">
                    {title}
                </div>
            </>
        );
    };

    return (
        <>
            <Header />
            <Container>
                <Carousel />
                <Section
                    title={t('home.headers.0.title')}
                    desc={t('home.headers.0.desc')}
                />
                <section className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3 xl:gap-4 h-[calc(theme(height.64)*2)] max-h-[calc(theme(height.64)*2)]">
                    <div className="relative col-span-1 bg-gradient-to-r from-purple-600 to-blue-600 overflow-y-hidden h-full rounded-sm">
                        <WithTag category={data?.categories?.[0]} isFirst />
                    </div>
                    <div className="col-span-1 flex justify-between flex-col gap-2 lg:gap-3 xl:gap-4">
                        <div className="relative grow h-64 max-h-64 bg-gradient-to-r from-purple-600 to-blue-600 overflow-y-hidden rounded-sm">
                            <WithTag category={data?.categories?.[1]} />
                        </div>
                        <div className="relative grow h-64 max-h-64 bg-gradient-to-r from-purple-600 to-blue-600 overflow-y-hidden rounded-sm">
                            <WithTag category={data?.categories?.[2]} />
                        </div>
                    </div>
                </section>
                <Section
                    title={t('home.headers.1.title')}
                    desc={t('home.headers.1.desc')}
                />
                <Products products={data?.products} />
                {/*<section className="grid gap-2 lg:gap-3 xl:gap-4 2xl:grid-cols-4 grid-cols-1 md:grid-cols-2"></section>*/}
            </Container>
            <Footer />
        </>
    );
};
export default Home;
