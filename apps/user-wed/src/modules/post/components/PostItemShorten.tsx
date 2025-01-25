/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
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
    Typography
} from '@mui/material';
import Link from 'next/link';

function PostItem() {
  return (
    <Card sx={{ width: '100%', maxWidth: 400, gap: 2 }}>
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
      <CardContent>
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
    </Card>
  );
}

export default PostItem;
