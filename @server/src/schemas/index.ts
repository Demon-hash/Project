export const typeDefs = `#graphql
type Book {
    title: String
    author: String
}

input AddBookInput {
    title: String!
    author: String!
}

type Query {
    books: [Book]
}

type Mutation {
    addBook(book: AddBookInput!): [Book]
}
`;
