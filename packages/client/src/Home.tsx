import { Container } from 'components/Container';
import { Header } from 'components/Header';
import { Filters } from 'components/Shopping/Filters';

export const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <div className="bg-foreground h-96 mt-6">Carousel</div>
                <Filters />
            </Container>
        </>
    );
};
