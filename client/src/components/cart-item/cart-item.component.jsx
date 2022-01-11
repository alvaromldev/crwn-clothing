import React from 'react';
import {
  CartItemContainer,
  CartItemDetails,
  CartItemDetailsName,
  CartItemImage,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt='item' />
    <CartItemDetails>
      <CartItemDetailsName>{name}</CartItemDetailsName>
      <span>{`${quantity} x $${price}`}</span>
    </CartItemDetails>
  </CartItemContainer>
);

export default React.memo(CartItem);
