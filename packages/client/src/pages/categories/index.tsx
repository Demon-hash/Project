import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'components/layout/Container';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';

const Categories: FC = () => {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </>
    );
};

export default Categories;
