/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import { Button, styled } from '@mui/material';
import React, { ReactNode } from 'react';

const ButtonContainer = styled(Button)`
  height: 48px;
  width: fit-content;
  padding: 8px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: #fff;

  &:hover {
    background-color: #284bf6;
  }

  &:active {
    background-color: #0c2bc8;
  }
`;

interface IButtonProps {
  href?: string;
  children: ReactNode;
}

function PrimaryButton({ href, children }: IButtonProps) {
  return <ButtonContainer href={href}>{children}</ButtonContainer>;
}

export default PrimaryButton;
