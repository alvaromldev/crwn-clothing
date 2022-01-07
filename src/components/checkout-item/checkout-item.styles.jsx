import styled, { css } from 'styled-components';

const CheckoutItemDetailStyles = css`
  width: 23%;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const CheckoutItemImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const CheckoutItemImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const CheckoutItemDetail = styled.span`
  ${CheckoutItemDetailStyles}
`;

export const CheckoutItemQuantity = styled.span`
  ${CheckoutItemDetailStyles}
  padding-left: 20px;
  display: flex;
`;

export const CheckoutItemQuantityArrow = styled.span`
  cursor: pointer;
`;

export const CheckoutItemQuantityValue = styled.span`
  margin: 0 10px;
`;

export const CheckoutItemRemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
