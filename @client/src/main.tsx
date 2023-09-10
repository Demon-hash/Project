import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { routers } from 'constants/routers';
import './i18n';
import './index.css';

createRoot(document.getElementById('root')).render(
    <RouterProvider router={routers} />,
);
