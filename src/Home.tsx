import { useTranslation } from 'react-i18next';
import { Header } from 'components/Header';
import { Container } from 'components/Container';
import { ShopFilters } from 'components/ShopFilters';

export const Home = () => {
    const { t } = useTranslation();

    return (
        <>
            <Header />
            <Container>
                <div className="bg-foreground h-96 mt-6">Carousel</div>
                <div className="py-8 grid grid-cols-3">
                    <div className="col-span-1">
                        <ShopFilters />
                    </div>
                    <div className="col-span-2 ml-4">
                        <h1 className="uppercase p-4 font-bold text-primary-foreground tracking-wider bg-primary">
                            {t('shop.by')}
                        </h1>
                    </div>
                </div>
            </Container>
        </>
    );
};
