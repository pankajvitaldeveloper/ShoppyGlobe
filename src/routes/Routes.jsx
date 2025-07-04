// Routes.jsximport React, { lazy } from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Checkout from '../components/Checkout';

const ProductList = lazy(() => import('../components/ProductList'));
const ProductDetail = lazy(() => import('../components/ProductDetail'));
const Cart = lazy(() => import('../components/Cart'));
const NotFound = lazy(() => import('../components/NotFound'));

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<ProductList />} />
    <Route path="/product/:id" element={<ProductDetail />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
    {/* Fallback route for 404 Not Found */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
