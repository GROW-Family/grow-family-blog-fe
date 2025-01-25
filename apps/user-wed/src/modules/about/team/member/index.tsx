/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import { Avatar, Box, Card, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

function Member() {
  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyItems: 'flex-start',
        flexDirection: 'column',
        gap: 1,
        padding: 1,
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyItems: 'flex-start',
          flexDirection: 'row',
          gap: 1,
        }}
      >
        <Avatar sx={{ width: 50, height: 50 }} aria-label="recipe">
          NQ
        </Avatar>
        <Stack
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
          <Link href='/about/member/2'>
            <Typography
              component="div"
              sx={{ fontSize: 16, fontWeight: '700' }}
            >
              Nguyen TRong Qui
            </Typography>
          </Link>

          <Typography
            component="div"
            sx={{ fontSize: 13, fontWeight: '500', color: 'blueviolet' }}
          >
            Lap Trinh Vien
          </Typography>
        </Stack>
      </Stack>
      <Box sx={{ fontSize: 13, fontWeight: '500', color: 'GrayText' }}>
        Bạn có thể tìm thấy rất nhiều thứ hay ho tại đây. Hảy tham gia cùng
        chúng tôi.
      </Box>
    </Card>
  );
}

export default Member;
