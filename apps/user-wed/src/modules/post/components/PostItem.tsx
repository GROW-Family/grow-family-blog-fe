"use client"
/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import styled from 'styled-components';

const PostiContainer = styled(Card)`
  width: 100%;
  max-width: 400px;
  transition: all 0.2s linear;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: -4px 4px 6px #cdcdcd;
  }
`;

function PostItem() {
  return (
    <PostiContainer>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height={194}
        sx={{ padding: 2 }}
        image="https://upload.wikimedia.org/wikipedia/commons/6/60/Flickr_-_ggallice_-_Santa_Elena_Reserve.jpg"
        alt="Paella dish"
      />
      <CardContent sx={{ gap: 4 }}>
        <Link href="/post/3">
          <Typography variant="h6" component="h6">
            Bill Walsh leadership lessons
          </Typography>
        </Link>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Like to know the secrets of transforming a 2-14 team into a 3x Super
          Bowl winning Dynasty?
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Stack direction="row" spacing={1}>
          <Chip label="Leadership" color="primary" />
          <Chip label="Management" color="success" />
        </Stack>
      </CardActions>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        {/* <Typography component='div' sx={{ fontSize: 16, fontWeight: 700, color: 'blue' }}>Đọc tiếp</Typography> */}
        {/* <ArrowForwardIcon/> */}
      </CardActions>
    </PostiContainer>
  );
}

export default PostItem;
