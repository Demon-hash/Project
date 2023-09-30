import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { store } from 'storage';
import { routers } from 'constants/routers';
import './i18n';
import './index.css';

const { VITE_GRAPHQL_SCHEMA_URL, GRAPHQL_SCHEMA_URL, DEV } = import.meta.env;

export const client = new ApolloClient({
    uri: DEV ? VITE_GRAPHQL_SCHEMA_URL : GRAPHQL_SCHEMA_URL,
    cache: new InMemoryCache(),
    connectToDevTools: DEV,
});

createRoot(document.getElementById('root') as HTMLElement).render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <RouterProvider router={routers} />
        </Provider>
    </ApolloProvider>,
);
