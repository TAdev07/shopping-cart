import React from 'react';
import Home from './pages/HomePage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Home />,
  },
  {
    path: '/cart',
    exact: false,
    main: () => <CartPage />,
  },
  {
    path: '',
    exact: false,
    main: () => <NotFoundPage />,
  },
];

export default routes;
