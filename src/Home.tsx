import { Container } from 'components/Container';
import { Header } from 'components/Header';
import { Filters } from 'components/Shopping/Filters';
import { Products } from 'components/Shopping/Products';

export const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <div className="bg-foreground h-96 mt-6">Carousel</div>
                <div className="py-8 grid grid-cols-3">
                    <div className="col-span-1 sticky top-0">
                        <Filters />
                    </div>
                    <div className="col-span-2 ml-4">
                        <div className="uppercase p-4 font-bold text-primary-foreground tracking-wider bg-primary h-14"></div>
                        <Products />
                    </div>
                </div>
            </Container>
        </>
    );
};
