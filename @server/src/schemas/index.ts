export const typeDefs = `#graphql
enum ProductColor {
    red
    orange
    yellow
    green
    sky
    blue
    violet
    purple
    pink
    white
    gray
    black
}

enum ProductSize {
    xs
    s
    m
    l
    xl
    xxl
}

enum ProductMaterial {
    synthetic
    wool
    linen
    denim
    leather
    silk
    chiffon
    other
}

type Product {
    title: String
    price: Int
    count: Int
    color: [ProductColor!]
    size: [ProductSize!]
    material: [ProductMaterial!]
}

input AddProductInput {
    title: String!
    price: Int!
    count: Int!
    color: [ProductColor!]!
    size: [ProductSize!]!
    material: [ProductMaterial!]!
}

type Query {
    products: [Product]
}

type Mutation {
    addProduct(product: AddProductInput!): Product
}
`;
