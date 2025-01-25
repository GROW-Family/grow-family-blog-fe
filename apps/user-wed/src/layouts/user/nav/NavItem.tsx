/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import React from 'react';
import { NavType } from './NavVertical';
import styled from 'styled-components';

const StyleItem = styled.div<{ active?: boolean }>`
  padding: 8px;
  background-color: ${(props) => (props.active ? '#70a6ec' : '#fff')};
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    background-color: #f3f3f3;
  }
`;

const NavItemContainer = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

interface INavItemProps {
  nav: NavType;
}

function NavItem({ nav }: INavItemProps) {
  return (
    <NavItemContainer>
      <StyleItem>{nav.subheader}</StyleItem>
      {nav.items.length > 0 &&
        nav.items.map((child) => <StyleItem key={child.title}>{child.title}</StyleItem>)}
    </NavItemContainer>
  );
}

export default NavItem;
