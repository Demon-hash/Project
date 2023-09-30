import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'storage';
import { selectCartId } from 'storage/cart';
import Container from 'components/layout/Container';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import { useGetCartQuery } from 'generated';

const Cart = () => {
    const { i18n } = useTranslation();
    const cartId = useAppSelector(selectCartId);

    const { data } = useGetCartQuery({
        variables: {
            locale: i18n.language,
            filter: {
                id: cartId,
            },
        },
    });

    console.log(data, cartId);

    return (
        <>
            <Header />
            <Container>Cart</Container>
            <Footer />
        </>
    );
};

export default Cart;
