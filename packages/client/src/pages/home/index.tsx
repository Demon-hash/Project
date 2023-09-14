import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Carousel from 'components/Carousel';
import Container from 'components/layout/Container';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import Section from 'components/layout/Section';

const Home: FC = () => {
    const { t } = useTranslation();
    const tags = ['Dresses', 'Jumpsuits', 'Jackets'];

    const Tag = ({ title }) => (
        <div className="absolute bg-white top-2 left-2 lg:top-4 lg:left-4 rounded-sm px-3 py-2">
            {title}
        </div>
    );

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
                    <div className="relative col-span-1 bg-foreground overflow-y-hidden h-full">
                        <Tag title={tags[0]} />
                    </div>
                    <div className="col-span-1 flex justify-between flex-col gap-2 lg:gap-3 xl:gap-4">
                        <div className="relative grow bg-foreground overflow-y-hidden">
                            <Tag title={tags[1]} />
                        </div>
                        <div className="relative grow bg-foreground overflow-y-hidden">
                            <Tag title={tags[2]} />
                        </div>
                    </div>
                </section>
                <Section
                    title={t('home.headers.1.title')}
                    desc={t('home.headers.1.desc')}
                />
                <section className="grid gap-2 lg:gap-3 xl:gap-4 2xl:grid-cols-4 grid-cols-1 md:grid-cols-2">
                    {[1, 2, 3, 4].map(id => (
                        <div
                            key={id}
                            className="relative col-span-1 grow h-96 bg-foreground"
                        ></div>
                    ))}
                </section>
            </Container>
            <Footer />
        </>
    );
};
export default Home;
