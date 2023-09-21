import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import { LINKS } from 'links';
import Categories from 'pages/categories';
import Home from 'pages/home';
import Product from 'pages/product';

export const routers = createBrowserRouter(
    createRoutesFromElements(
        <Route path={LINKS.HOME}>
            <Route index element={<Home />}></Route>
            <Route path={LINKS.CATEGORIES} element={<Categories />}></Route>
            <Route path={LINKS.PRODUCT} element={<Product />}></Route>
        </Route>,
    ),
);
