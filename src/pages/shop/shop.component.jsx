import { collection, getDocs } from 'firebase/firestore';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import CollectionPage from '../collection/collection.component';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { handleUpdateCollections } = this.props;
    const collectionRef = collection(firestore, 'collections');

    getDocs(collectionRef).then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      handleUpdateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot = null;
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        <Routes>
          <Route
            path=':collectionId'
            element={<CollectionPageWithSpinner isLoading={loading} />}
          />
          <Route
            path='/'
            element={<CollectionsOverviewWithSpinner isLoading={loading} />}
          />
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleUpdateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
