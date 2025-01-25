/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
'use client';
import React from 'react';
import { Container, Grid2 } from '@mui/material';
import NewPost from '../../../modules/post/newPost';
import Controller from '../../../modules/post/newPost/Controller';

function page() {
  return (
    <Container maxWidth='lg'>
      <Grid2 spacing={4} columns={24} container>
        <Grid2 size={18}>
          <NewPost />
        </Grid2>
        <Grid2 size={6}>
          <Controller />
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default page;
