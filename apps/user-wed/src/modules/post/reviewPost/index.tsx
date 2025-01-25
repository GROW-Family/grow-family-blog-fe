'use client';
/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
'use client';
import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

function ReviewPost() {
  const { Title, Foreword, Node, Id } = useSelector((state: RootState) => state.newPost);

  useEffect(() => {
    console.log('---> Id: ', Id);
    console.log('---> Title: ', Title);
  }, [Title, Id]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Typography variant="body1">{new Date().toUTCString()}</Typography>
      <Typography variant="h3" component="h3">
        {Title}
      </Typography>
    </Box>
  );
}

export default ReviewPost;
