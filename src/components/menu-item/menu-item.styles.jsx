import styled, { css } from 'styled-components';

const MenuItemContainerStyles = css`
  height: 240px;
`;

const LargeMenuItemContainerStyles = css`
  height: 380px;
`;

const getMenuItemStyles = ({ size }) =>
  size === 'large' ? LargeMenuItemContainerStyles : MenuItemContainerStyles;
export const MenuItemImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

export const MenuItemContent = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

export const MenuItemContainer = styled.div`
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  ${getMenuItemStyles}

  &:hover {
    cursor: pointer;

    & ${MenuItemImage} {
      transform: scale(1.05);
      transition: transform 2s ease-out;
    }

    & ${MenuItemContent} {
      opacity: 0.9;
      transition: opacity 0.05s ease-in;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  margin: 0 6px 0;
  font-size: 22px;
  color: #4a4a4a;
`;

export const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
