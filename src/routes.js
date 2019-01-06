import React from 'react';
import Home from './pages/HomePage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductDetailPage from './pages/ProductDetailPage';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Home />,
  },
  {
    path: '/product/:name',
    exact: false,
    main: ({match}) => <ProductDetailPage match={match} />,
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
