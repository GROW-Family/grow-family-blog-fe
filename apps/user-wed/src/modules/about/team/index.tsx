/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import { Grid2 } from '@mui/material';
import Member from './member';

function Teams() {
  return (
    <Grid2 container columns={18} spacing={2} sx={{ pt: 2, pb: 2 }}>
      <Grid2 size={6}>
        <Member />
      </Grid2>
      <Grid2 size={6}>
        <Member />
      </Grid2>
      <Grid2 size={6}>
        <Member />
      </Grid2>
      <Grid2 size={6}>
        <Member />
      </Grid2>
      <Grid2 size={6}>
        <Member />
      </Grid2>
    </Grid2>
  );
}

export default Teams;
