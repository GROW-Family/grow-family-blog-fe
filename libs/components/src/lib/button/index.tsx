/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import { Box, Button, styled } from '@mui/material';
import getIcon from '../utils/getIcon';
import React, { ReactNode } from 'react';

const ButtonContainer = styled(Button)`
  height: 40px;
  width: fit-content;
  padding: 8px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: #fff;

  &:hover {
    background-color: #1535d3;
    color: #fff;
  }

  &:active {
    background-color: #0c2bc8;
    color: #fff;
  }
`;

const Content = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
`;

interface IPrimaryButtonProps {
  href?: string;
  icon?: IconType;
  children?: ReactNode;
}

function PrimaryButton({ icon, children, href }: IPrimaryButtonProps) {
  return (
    <ButtonContainer href={href}>
      <Content>
        {icon && getIcon(icon)} {children}
      </Content>
    </ButtonContainer>
  );
}

export default PrimaryButton;
