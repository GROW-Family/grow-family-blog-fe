/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Avatar, IconButton, Stack } from '@mui/material';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  padding-right: 32px;
  padding-top: 8px;
  padding-left: 16px;
  background-color: #fff;
  padding-bottom: 8px;
`;

function Header() {
  return (
    <HeaderContainer>
      <MenuOpenIcon />
      <Stack>
        <IconButton sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Stack>
    </HeaderContainer>
  );
}

export default Header;
