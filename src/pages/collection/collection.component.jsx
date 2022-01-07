import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import {
  CollectionItemList,
  CollectionPageContainer,
  CollectionTitle,
} from './collection.styles';

const CollectionPage = () => {
  const { collectionId } = useParams();
  const { title, items } = useSelector(selectCollection(collectionId));
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemList>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemList>
    </CollectionPageContainer>
  );
};

export default CollectionPage;
