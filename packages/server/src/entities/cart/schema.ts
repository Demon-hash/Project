const CART_SCHEMA = `#graphql
type CartItem {
    product: Product!
    count: Int!
}

type Cart {
    id: ID
    items: [CartItem]
}

input InputCartsFilter {
    id: ID
    limit: Int
    offset: Int
}

type Query {
    carts(locale: String, filter: InputCartsFilter): [Cart]
}
`;

export default CART_SCHEMA;
