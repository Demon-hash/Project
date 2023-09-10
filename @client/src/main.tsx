import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { routers } from 'constants/routers';
import './i18n';
import './index.css';

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
    connectToDevTools: true,
});

createRoot(document.getElementById('root')).render(
    <ApolloProvider client={client}>
        <RouterProvider router={routers} />,
    </ApolloProvider>,
);
