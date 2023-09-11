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

input InputProductsFilter {
    id: ID
    price: [Int]
    stock: Int
    color: [String]
    size: [String]
    material: [String]
    category: [String]
    brand: [String]
    type: [String]
}

type Query {
    products(limit: Int, offset: Int, filter: InputProductsFilter): [Product]
}
`;

export default PRODUCT_SCHEMA;
