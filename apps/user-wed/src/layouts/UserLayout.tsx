/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import { Box, Grid2 } from '@mui/material';
import React from 'react';
import Header from './user/Header';
import NavVertical from './user/nav/NavVertical';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(min(24), 1fr);
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

const NavBar = styled.div`
  grid-column: span 4;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  grid-column: span 20;
  position: relative;
`;

interface IUserLayoutProps {
  children: React.ReactNode;
}

function UserLayout({ children }: IUserLayoutProps) {
  return (
    <Container>
      <NavBar>
        <NavVertical />
      </NavBar>
      <ContentContainer>
        <Header />
        <Box sx={{ pt: { md: 8, lg: 11 }, width: '100%' }}>{children}</Box>
      </ContentContainer>
    </Container>
  );
}

export default UserLayout;
