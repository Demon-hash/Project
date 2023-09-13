import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { routers } from 'constants/routers';
import './i18n';
import './index.css';

const { VITE_GRAPHQL_SCHEMA_URL, DEV } = import.meta.env;

const client = new ApolloClient({
    uri: VITE_GRAPHQL_SCHEMA_URL,
    cache: new InMemoryCache(),
    connectToDevTools: DEV,
});

createRoot(document.getElementById('root')).render(
    <ApolloProvider client={client}>
        <RouterProvider router={routers} />,
    </ApolloProvider>,
);
