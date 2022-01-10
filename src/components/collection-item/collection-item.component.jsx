import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import {
  CollectionItemButton,
  CollectionItemContainer,
  CollectionItemFooter,
  CollectionItemImage,
  ItemFooterName,
  ItemFooterPrice,
} from './collection-item.styles';

const CollectionItem = ({ item, handleAddItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <CollectionItemImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <CollectionItemFooter>
        <ItemFooterName>{name}</ItemFooterName>
        <ItemFooterPrice>{`$${price}`}</ItemFooterPrice>
      </CollectionItemFooter>
      <CollectionItemButton onClick={() => handleAddItem(item)} inverted>
        ADD TO CART
      </CollectionItemButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleAddItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
