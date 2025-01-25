/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import { Box, Divider, Typography } from '@mui/material';
import CommentItem from './components/CommentItem';
import NewComment from './components/NewComment';

function Comment() {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h6" sx={{ fontWeight: '700' }}>
        Commemt
      </Typography>
      <NewComment />
      <Divider sx={{ mt: 1, mb: 1 }}/>
      <CommentItem />
    </Box>
  );
}

export default Comment;
