import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import {
  CollectionItemButton,
  CollectionItemContainer,
  CollectionItemFooter,
  CollectionItemImage,
  ItemFooterName,
  ItemFooterPrice,
} from './collection-item.styles';

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();

  return (
    <CollectionItemContainer>
      <CollectionItemImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <CollectionItemFooter>
        <ItemFooterName>{name}</ItemFooterName>
        <ItemFooterPrice>{`$${price}`}</ItemFooterPrice>
      </CollectionItemFooter>
      <CollectionItemButton onClick={() => dispatch(addItem(item))} inverted>
        ADD TO CART
      </CollectionItemButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
