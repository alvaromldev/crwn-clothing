import React from 'react';
import { connect } from 'react-redux';
import { addItem, clearItem, removeItem } from '../../redux/cart/cart.actions';
import {
  CheckoutItemContainer,
  CheckoutItemDetail,
  CheckoutItemImage,
  CheckoutItemImageContainer,
  CheckoutItemQuantityArrow,
  CheckoutItemQuantityValue,
  CheckoutItemRemoveButton,
} from './checkout-item.styles';

const CheckoutItem = ({
  cartItem,
  handleClearItem,
  handleAddItem,
  handleRemoveItem,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <CheckoutItemImageContainer>
        <CheckoutItemImage alt='item' src={imageUrl} />
      </CheckoutItemImageContainer>
      <CheckoutItemDetail>{name}</CheckoutItemDetail>
      <CheckoutItemDetail>
        <CheckoutItemQuantityArrow onClick={() => handleRemoveItem(cartItem)}>
          &#10094;
        </CheckoutItemQuantityArrow>
        <CheckoutItemQuantityValue>{quantity}</CheckoutItemQuantityValue>
        <CheckoutItemQuantityArrow onClick={() => handleAddItem(cartItem)}>
          &#10095;
        </CheckoutItemQuantityArrow>
      </CheckoutItemDetail>
      <CheckoutItemDetail>{price}</CheckoutItemDetail>
      <CheckoutItemRemoveButton onClick={() => handleClearItem(cartItem)}>
        &#10005;
      </CheckoutItemRemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleClearItem: (item) => dispatch(clearItem(item)),
  handleAddItem: (item) => dispatch(addItem(item)),
  handleRemoveItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
