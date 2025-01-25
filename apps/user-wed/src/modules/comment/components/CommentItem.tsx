/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import { Avatar, Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplyIcon from '@mui/icons-material/Reply';
import { MoreHorizOutlined } from '@mui/icons-material';

function CommentItem() {
  return (
    <Box sx={{ flex: 1, width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyItems: 'flex-start',
          gap: 1,
          width: '100%',
        }}
      >
        <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
          R
        </Avatar>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            width: '100%',
          }}
        >
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 0.5 }}>
              <Typography variant="h6" sx={{ fontWeight: '600', fontSize: 14 }}>
                Nguyen Trong Qui
              </Typography>
              <Typography sx={{ fontSize: 11 }}>September 14, 2016</Typography>
            </Stack>
            <Button>
              <MoreHorizOutlined />
            </Button>
          </Stack>

          <Box
            sx={{
              width: '100%',
              fontSize: 13,
              fontWeight: '400',
            }}
          >
            Very good blog.
          </Box>
        </Stack>
      </Box>
      <Stack
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          gap: 0.5,
          mt: 1,
        }}
      >
        <Button sx={{ width: 40, height: 40 }}>
          <FavoriteIcon sx={{ fontSize: 20 }} />
          <Typography>10</Typography>
        </Button>
        <Button sx={{ width: 40, height: 40 }}>
          <ReplyIcon sx={{ fontSize: 24 }} />
          <Typography>2</Typography>
        </Button>
      </Stack>
    </Box>
  );
}

export default CommentItem;
