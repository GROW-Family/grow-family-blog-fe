/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SmsIcon from '@mui/icons-material/Sms';
import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Container,
  Divider,
  Grid2,
  Stack,
  Typography,
} from '@mui/material';
import PostItem from '../../../modules/post/components/PostItem';
import BoltIcon from '@mui/icons-material/Bolt';
import PostItemShorten from '../../../modules/post/components/PostItemShorten';
import Comment from '../../../modules/comment';

function PostDetail() {
  return (
    <Container maxWidth="xl">
      <Grid2 container columns={24} spacing={3}>
        <Grid2 size={6}>
          <PostItemShorten />
        </Grid2>
        <Grid2 size={18} sx={{ bgcolor: '#fff' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Stack sx={{ display: 'flex', flexDirection: 'row' }}>
                <BoltIcon color="warning" />
                <Typography sx={{ color: 'goldenrod' }}>
                  Member only story
                </Typography>
              </Stack>

              <Typography
                variant="h3"
                component="h3"
                sx={{ fontWeight: '700' }}
              >
                Grid system for better Design User Interface
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyItems: 'flex-start',
                  gap: 1,
                }}
              >
                <Avatar  sx={{ width: 56, height: 56 }} aria-label="recipe">
                  NQ
                </Avatar>
                <Stack
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                  }}
                >
                  <Typography sx={{ fontWeight: '600', fontSize: 16 }}>Nguyen Trong Qui</Typography>
                  <Typography sx={{ fontWeight: '400', fontSize: 12 }}>September 14, 2016</Typography>
                </Stack>
              </Box>
              <Box
                sx={{
                  pt: 0.5,
                  pb: 0.5,
                  borderTop: '1px solid #cdcdcd',
                  borderBottom: '1px solid #cdcdcd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}
              >
                <Stack
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyItems: 'flex-start',
                    gap: 1,
                    flexDirection: 'row',
                  }}
                >
                  <Button
                    sx={{
                      width: 42,
                      height: 42,
                      display: 'flex',
                      flexDirection: 'row',
                    }}
                  >
                    <FavoriteIcon />
                    <Typography>127</Typography>
                  </Button>
                  <Button
                    sx={{
                      width: 42,
                      height: 42,
                      display: 'flex',
                      flexDirection: 'row',
                    }}
                  >
                    <SmsIcon />
                    <Typography>10</Typography>
                  </Button>
                </Stack>
                <Stack>
                  <Button
                    sx={{
                      width: 42,
                      height: 42,
                      display: 'flex',
                      flexDirection: 'row',
                    }}
                  >
                    <MoreVertIcon />
                  </Button>
                </Stack>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: '100%', height: 400 }}
              image="https://upload.wikimedia.org/wikipedia/commons/6/60/Flickr_-_ggallice_-_Santa_Elena_Reserve.jpg"
              alt="Paella dish"
            />
          </Box>
          <Divider sx={{ mt: 4, mb: 1 }} />
          <Comment />
        </Grid2>
      </Grid2>
      <Divider sx={{ mt: 8, mb: 2 }} />
      <Typography variant="h6" sx={{ fontSize: 20, fontWeight: '700' }}>Suggestions for you</Typography>
      <Grid2 container columns={24} spacing={2} sx={{ mb: 4, mt: 1 }}>
        {[...new Array(4)].map((_, index) => (
          <Grid2 key={index} size={6}>
            <PostItem />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
}

export default PostDetail;
