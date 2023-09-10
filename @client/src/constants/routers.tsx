import { Trans } from 'react-i18next';
import {
    Link,
    Outlet,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Home } from '../Home';

export const enum ROUTE {
    HOME = '/',
    CATEGORIES = '/categories',
    MEN = '/categories/men',
    WOMEN = '/categories/women',
    CHILDREN = '/categories/children',
    AUTH = '/auth',
    LOGIN = '/auth/login',
}

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
    connectToDevTools: true,
});

export const routers = createBrowserRouter(
    createRoutesFromElements(
        <Route
            element={
                <>
                    <ApolloProvider client={client}>
                        <Outlet />
                    </ApolloProvider>
                </>
            }
        >
            <Route
                path={ROUTE.HOME}
                element={<Home />}
                handle={{
                    crumb: () => (
                        <Link to={ROUTE.HOME}>
                            <Trans i18nKey="route.home" />
                        </Link>
                    ),
                }}
            >
                <Route
                    path={ROUTE.CATEGORIES}
                    element={<Outlet />}
                    handle={{
                        crumb: () => (
                            <Link to={ROUTE.CATEGORIES}>
                                <Trans i18nKey="route.categories" />
                            </Link>
                        ),
                    }}
                >
                    <Route
                        index
                        path={ROUTE.WOMEN}
                        lazy={() => import('../pages/login')}
                        handle={{
                            crumb: () => (
                                <Link to={ROUTE.WOMEN}>
                                    <Trans i18nKey="categories.women" />
                                </Link>
                            ),
                        }}
                    ></Route>
                    <Route
                        path={ROUTE.MEN}
                        lazy={() => import('../pages/login')}
                        handle={{
                            crumb: () => (
                                <Link to={ROUTE.MEN}>
                                    <Trans i18nKey="categories.men" />
                                </Link>
                            ),
                        }}
                    ></Route>
                    <Route
                        path={ROUTE.CHILDREN}
                        lazy={() => import('../pages/login')}
                        handle={{
                            crumb: () => (
                                <Link to={ROUTE.CHILDREN}>
                                    <Trans i18nKey="categories.children" />
                                </Link>
                            ),
                        }}
                    ></Route>
                </Route>
            </Route>
        </Route>,
    ),
);
