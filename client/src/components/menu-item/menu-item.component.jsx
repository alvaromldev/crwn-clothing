import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MenuItemContainer,
  MenuItemContent,
  MenuItemImage,
  Subtitle,
  Title,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  let navigate = useNavigate();
  return (
    <MenuItemContainer size={size} onClick={() => navigate(linkUrl)}>
      <MenuItemImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <MenuItemContent>
        <Title>{title.toUpperCase()}</Title>
        <Subtitle>SHOP NOW</Subtitle>
      </MenuItemContent>
    </MenuItemContainer>
  );
};

export default MenuItem;
