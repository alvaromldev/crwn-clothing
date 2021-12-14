import React from 'react';
import { HomePage } from './pages/homepage/homepage.component';
import './styles.scss';
import { Route, Routes } from 'react-router-dom';
import { ShopPage } from './pages/shop/shop.component';
import { Header } from './components/header/header-component';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/shop" element={<ShopPage />}></Route>
      </Routes>
    </div>
  );
}
