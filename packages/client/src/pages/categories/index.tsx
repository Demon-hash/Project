import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'components/layout/Container';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import Filters from 'components/shopping/Filters';

const Categories: FC = () => {
    const { category } = useParams();
    return (
        <>
            <Header />
            <Container>
                <Filters category={category} />
            </Container>
            <Footer />
        </>
    );
};

export default Categories;
