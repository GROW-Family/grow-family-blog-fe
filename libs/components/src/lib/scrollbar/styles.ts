/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import { alpha, Box, styled } from '@mui/material';

export const StyledRootScrollbar = styled('div')(() => ({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden',
}));

export const StyledScrollbar = styled(Box)(({ theme }) => ({
  maxHeight: '100%',
  overflow: 'auto',
  backgroundColor: alpha(theme.palette.grey[600], 0.48),
}));
