/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import { IScrollbarProps } from '.';
import { StyledRootScrollbar, StyledScrollbar } from './styles';

function Scrollbar({ children, sx }: IScrollbarProps) {
  return (
    <StyledRootScrollbar>
      <StyledScrollbar sx={sx}>{children}</StyledScrollbar>
    </StyledRootScrollbar>
  );
}

export default Scrollbar;
