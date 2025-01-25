'use client';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  Grid2,
  IconButton,
  Stack,
  Typography
} from '@mui/material';
import Link from 'next/link';
import BlogForYou from '../post/BlogForYou';
import MediaSlider from './components/MediaSlider';

function HomePage() {
  return (
    <Container maxWidth="xl" component="main">
      <MediaSlider />
      <Box sx={{ width: '100%', pt: 4 }}>
        <Typography variant="h6" component="h6">
          Recent blog posts
        </Typography>
        <Grid2 spacing={2} columns={24} container paddingTop={2}>
          <Grid2 size={12}>
            <Card sx={{ width: '100%' }}>
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
                height={210}
                sx={{ padding: 2 }}
                image="https://upload.wikimedia.org/wikipedia/commons/6/60/Flickr_-_ggallice_-_Santa_Elena_Reserve.jpg"
                alt="Paella dish"
              />
              <CardContent sx={{ gap: 4 }}>
                <Link href="/post/2">
                  <Typography variant="h6" component="h6">
                    Bill Walsh leadership lessons
                  </Typography>
                </Link>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  How do you create compelling presentations that wow your
                  colleagues and impress your managers?
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Stack direction="row" spacing={1}>
                  <Chip label="Leadership" color="primary" />
                  <Chip label="Management" color="success" />
                </Stack>
              </CardActions>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid2>
          <Grid2 size={12} container columns={6}>
            <Grid2 size={6}>
              <Card sx={{ display: 'flex', width: '100%' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 300, height: 'auto', padding: 2 }}
                  image="https://upload.wikimedia.org/wikipedia/commons/6/60/Flickr_-_ggallice_-_Santa_Elena_Reserve.jpg"
                  alt="Paella dish"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
                        R
                      </Avatar>
                    }
                    action={
                      <>
                        <IconButton aria-label="add to favorites">
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                          <ShareIcon />
                        </IconButton>
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      </>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                  />
                  <CardContent sx={{ gap: 4 }}>
                    <Typography variant="h6" component="h6">
                      Bill Walsh leadership lessons
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary' }}
                    >
                      Like to know the secrets of transforming a 2-14 team into
                      a 3x Super Bowl winning Dynasty?
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <Stack direction="row" spacing={1}>
                      <Chip label="Leadership" color="primary" />
                      <Chip label="Management" color="success" />
                    </Stack>
                  </CardActions>
                </Box>
              </Card>
            </Grid2>
            <Grid2 size={6}>
              <Card sx={{ display: 'flex', width: '100%' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 300, height: 'auto', padding: 2 }}
                  image="https://upload.wikimedia.org/wikipedia/commons/6/60/Flickr_-_ggallice_-_Santa_Elena_Reserve.jpg"
                  alt="Paella dish"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
                        R
                      </Avatar>
                    }
                    action={
                      <>
                        <IconButton aria-label="add to favorites">
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                          <ShareIcon />
                        </IconButton>
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      </>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                  />
                  <CardContent sx={{ gap: 4 }}>
                    <Typography variant="h6" component="h6">
                      Bill Walsh leadership lessons
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary' }}
                    >
                      Like to know the secrets of transforming a 2-14 team into
                      a 3x Super Bowl winning Dynasty?
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <Stack direction="row" spacing={1}>
                      <Chip label="Leadership" color="primary" />
                      <Chip label="Management" color="success" />
                    </Stack>
                  </CardActions>
                </Box>
              </Card>
            </Grid2>
          </Grid2>
          <Grid2 size={24}>
            <Card sx={{ display: 'flex', width: '100%' }}>
              <CardMedia
                component="img"
                sx={{ width: 300, height: 'auto', padding: 2 }}
                image="https://upload.wikimedia.org/wikipedia/commons/6/60/Flickr_-_ggallice_-_Santa_Elena_Reserve.jpg"
                alt="Paella dish"
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={
                    <>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    </>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardContent sx={{ gap: 4 }}>
                  <Typography variant="h6" component="h6">
                    Bill Walsh leadership lessons
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    A grid system is a design tool used to arrange content on a
                    webpage. It is a series of vertical and horizontal lines
                    that create a matrix of intersecting points, which can be
                    used to align and organize page elements. Grid systems are
                    used to create a consistent look and feel across a website,
                    and can help to make the layout more visually appealing and
                    easier to navigate.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Stack direction="row" spacing={1}>
                    <Chip label="Leadership" color="primary" />
                    <Chip label="Management" color="success" />
                  </Stack>
                </CardActions>
              </Box>
            </Card>
          </Grid2>
        </Grid2>
      </Box>
      <BlogForYou />
    </Container>
  );
}

export default HomePage;
