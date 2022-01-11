import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import {
  CartDropdownContainer,
  CartItemButton,
  CartItemList,
  CartItemListEmptyMessage,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <CartDropdownContainer>
      <CartItemList>
        {!!cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <CartItemListEmptyMessage>
            Your cart is empty
          </CartItemListEmptyMessage>
        )}
      </CartItemList>
      <CartItemButton
        onClick={() => {
          navigate('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CartItemButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
