import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = () => (
  <div className='shop-page'>
    <Routes>
      <Route path=':collectionId' element={<CollectionPage />} />
      <Route path='/' element={<CollectionsOverview />} />
    </Routes>
  </div>
);

export default ShopPage;
