const CART_SCHEMA = `#graphql

input InputCartsFilter {
    id: ID
    limit: Int
    offset: Int
}

input InputAddCartProduct {
    id: ID!
    count: Int!
}

type CartItem {
    product: Product!
    count: Int!
}

type Cart {
    id: ID!
    products: [CartItem]
}

type Query {
    carts(locale: String, filter: InputCartsFilter): [Cart]
}

type Mutation {
    addCartProducts(id: ID!, products: [InputAddCartProduct]!): ID
}
`;

export default CART_SCHEMA;
