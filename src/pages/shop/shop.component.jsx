import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import CollectionPageContainer from '../collection/collection.container';

const ShopPage = ({ handleFetchCollectionsStart }) => {
  useEffect(() => {
    handleFetchCollectionsStart();
  }, [handleFetchCollectionsStart]);

  return (
    <div>
      <Routes>
        <Route path='/' element={<CollectionsOverviewContainer />} />
        <Route path=':collectionId' element={<CollectionPageContainer />} />
      </Routes>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleFetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
