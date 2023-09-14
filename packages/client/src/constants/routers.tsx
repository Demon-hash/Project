import { Trans } from 'react-i18next';
import {
    Link,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import Categories from 'pages/categories';
import Home from 'pages/home';
import PATHS from 'paths';
import Filters from 'components/Shopping/Filters';

const categories: (keyof typeof PATHS)[] = ['WOMEN', 'MEN', 'CHILDREN'];

export const routers = createBrowserRouter(
    createRoutesFromElements(
        <Route path={PATHS.HOME}>
            <Route
                index={true}
                element={<Home />}
                handle={{
                    crumb: () => (
                        <Link to={PATHS.HOME}>
                            <Trans i18nKey="route.home" />
                        </Link>
                    ),
                }}
            ></Route>
            <Route
                path={PATHS.CATEGORIES}
                element={<Categories />}
                handle={{
                    crumb: () => (
                        <Link to={PATHS.CATEGORIES}>
                            <Trans i18nKey="route.categories" />
                        </Link>
                    ),
                }}
            >
                {categories.map(category => (
                    <Route
                        key={category}
                        path={PATHS[category]}
                        element={<Filters category={category} />}
                        handle={{
                            crumb: () => (
                                <Link to={PATHS[category]}>
                                    <Trans
                                        i18nKey={`categories.${category.toLowerCase()}`}
                                    />
                                </Link>
                            ),
                        }}
                    ></Route>
                ))}
            </Route>
        </Route>,
    ),
);
