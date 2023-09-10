import { books } from 'mocks';

export const resolvers = {
    Query: {
        books: () => books,
    },
    Mutation: {
        addBook: (_, { title, author }) => {
            const product = { title, author };
            books.push(product);

            return books;
        }
    }
};
