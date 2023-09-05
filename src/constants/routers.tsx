import {
    createBrowserRouter,
    createRoutesFromElements,
    Link,
    Route,
    Navigate,
} from 'react-router-dom';
import { Trans } from 'react-i18next';
import { Home } from '../Home';

export const enum ROUTE {
    HOME = '/',
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
                path={ROUTE.AUTH}
                element={<Navigate to={ROUTE.HOME} replace />}
                handle={{
                    crumb: () => (
                        <Link to={ROUTE.AUTH}>
                            <Trans i18nKey="route.auth" />
                        </Link>
                    ),
                }}
            >
                <Route
                    index
                    path={ROUTE.LOGIN}
                    lazy={() => import('../pages/login')}
                    handle={{
                        crumb: () => (
                            <Link to={ROUTE.LOGIN}>
                                <Trans i18nKey="route.login" />
                            </Link>
                        ),
                    }}
                ></Route>
            </Route>
        </Route>,
    ),
);
