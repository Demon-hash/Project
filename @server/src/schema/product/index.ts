const PRODUCT_SCHEMA = `#graphql
type Product {
    id: ID!
    title: Language!
    price: Int!
    stock: Int!
    imageUrl: String!
    color: [Color!]
    size: [Size!]
    material: [Material!]
    category: [Category!]
    brand: [Brand!]
    type: [Type!]
}

type Query {
    products: [Product]
}
`;

export default PRODUCT_SCHEMA;
