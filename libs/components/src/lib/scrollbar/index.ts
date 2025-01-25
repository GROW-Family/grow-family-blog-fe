/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import { SxProps, Theme } from '@mui/material';
import { ReactNode } from 'react';

export interface IScrollbarProps {
  children?: ReactNode;
  sx?: SxProps<Theme>;
}
