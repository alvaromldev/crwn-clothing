import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import {
  CartIconContainer,
  ShoppingCartIcon,
  ShoppingCartItemCount,
} from './cart-icon.styles';

const CartIcon = ({ handleToggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={handleToggleCartHidden}>
    <ShoppingCartIcon />
    <ShoppingCartItemCount>{itemCount}</ShoppingCartItemCount>
  </CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  handleToggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
