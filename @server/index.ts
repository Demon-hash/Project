import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { schema } from '../@graphql/schema';
import { resolvers } from 'resolvers';

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
});

(async () => {
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });
    console.log(`Server ready at: ${url}`);
})();
