/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import { Avatar, Box, Button, Input, Stack } from '@mui/material';
import React from 'react';

function NewComment() {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%', pt: 2, pb: 2 }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Avatar
           sx={{ width: 56, height: 56 }}
          aria-label="recipe"
        >
          Q
        </Avatar>
        <Input
          sx={{ width: '100%', height: 40 }}
          placeholder="Write someone..."
        />
      </Stack>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 1,
          width: '100%',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          variant="contained"
          color="inherit"
          sx={{ borderRadius: 20, height: 32, width: 100, fontSize: 14 }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{ borderRadius: 20, height: 32, width: 100, fontSize: 14 }}
        >
          Summit
        </Button>
      </Stack>
    </Box>
  );
}

export default NewComment;
