const CART_SCHEMA = `#graphql

input InputAddCartProduct {
    id: ID!
    count: Int!
}

type ReferenceToCartProduct {
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

type ReferenceToCart {
    id: ID!
    products: [ReferenceToCartProduct]
}

input InputCartsFilter {
    id: [ID]
    limit: Int
    offset: Int
}

type Query {
    carts(locale: String, filter: InputCartsFilter): [Cart]
}

type Mutation {
    createCart(products: [InputAddCartProduct]!): ReferenceToCart
    addCartProducts(id: ID!, products: [InputAddCartProduct]!): ReferenceToCart
}
`;

export default CART_SCHEMA;
