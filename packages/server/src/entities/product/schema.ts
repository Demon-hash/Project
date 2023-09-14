const PRODUCT_SCHEMA = `#graphql
type Product {
    id: ID!
    title: String
    description: String
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
    sort: [String]
    limit: Int
    offset: Int
}

type Query {
    products(locale: String, filter: InputProductsFilter): [Product]
}
`;

export default PRODUCT_SCHEMA;
