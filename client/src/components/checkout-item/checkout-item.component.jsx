import React from 'react';
import { useDispatch } from 'react-redux';
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

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  return (
    <CheckoutItemContainer>
      <CheckoutItemImageContainer>
        <CheckoutItemImage alt='item' src={imageUrl} />
      </CheckoutItemImageContainer>
      <CheckoutItemDetail>{name}</CheckoutItemDetail>
      <CheckoutItemDetail>
        <CheckoutItemQuantityArrow
          onClick={() => dispatch(removeItem(cartItem))}
        >
          &#10094;
        </CheckoutItemQuantityArrow>
        <CheckoutItemQuantityValue>{quantity}</CheckoutItemQuantityValue>
        <CheckoutItemQuantityArrow onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </CheckoutItemQuantityArrow>
      </CheckoutItemDetail>
      <CheckoutItemDetail>{price}</CheckoutItemDetail>
      <CheckoutItemRemoveButton onClick={() => dispatch(clearItem(cartItem))}>
        &#10005;
      </CheckoutItemRemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
