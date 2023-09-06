import {
    createBrowserRouter,
    createRoutesFromElements,
    Link,
    Route,
} from 'react-router-dom';
import { Trans } from 'react-i18next';
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

export const routers = createBrowserRouter(
    createRoutesFromElements(
        <Route
            exact
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
                element={<Home />}
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
                    index
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
        </Route>,
    ),
);
