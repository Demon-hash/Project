import { gql } from '@apollo/client';

export const GET_PRODUCTS_QUERY = gql`
    query getProducts {
        products {
            title {
                en
            }
            price
            size
        }
    }
`;
