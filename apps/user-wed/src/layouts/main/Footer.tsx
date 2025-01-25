'use client';
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import {
    Container,
    Grid2,
    IconButton,
    Link,
    Stack,
    Toolbar,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import NextLink from 'next/link';


const LINKS = [
  {
    headline: 'Blog Team',
    children: [
      {
        name: 'About Us',
        href: '/about/member',
      },
      {
        name: 'Contact Us',
        href: '',
      },
    ],
  },
  {
    headline: 'Contact',
    children: [
      {
        name: 'trongqui2712@gmail.com',
        href: '',
      },
      {
        name: 'Dakao, Q1, TP.HCM',
        href: '',
      },
    ],
  },
];

function Footer() {

  return (
    <Box component="footer" position="relative" bgcolor="transparent">
      <Container sx={{ pt: 10 }}>
        <Grid2 container columns={24}>
          <Grid2 size={3}>
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography>
            </Toolbar>
          </Grid2>
          <Grid2 size={7}>
            <Typography variant="body2" sx={{ pr: { md: 5 } }}>
              Subscribe to learn about new product features, the latest in
              technology, solutions, and updates.
            </Typography>
            <Stack
              spacing={1}
              direction="row"
              justifyContent={{ sx: 'center', md: 'flex-start' }}
              sx={{
                mt: 5,
                mb: { xs: 5, md: 8 },
              }}
            >
              <IconButton>
                <Facebook />
              </IconButton>
              <IconButton>
                <Instagram />
              </IconButton>
              <IconButton>
                <LinkedIn />
              </IconButton>
            </Stack>
          </Grid2>
          <Grid2 size={14}>
            <Stack
              spacing={5}
              justifyContent="space-between"
              direction={{ sx: 'column', xl: 'row' }}
            >
              {LINKS.map((list) => (
                <Stack key={list.headline} spacing={2}>
                  <Typography variant="overline" component="div" sx={{ fontSize: 14, fontWeight: '700' }}>
                    {list.headline}
                  </Typography>
                  {list.children.map((link) => (
                    <Link key={link.name} href={link.href} underline="none" variant="overline" color='#000' sx={{ fontSize: 11, fontWeight: '500' }} component={NextLink}>
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid2>
        </Grid2>
        <Stack
          direction={{ sx: 'column', xl: 'column' }}
          sx={{ mt: 10, mb: 5 }}
        >
          <Typography
            variant="caption"
            component="div"
            sx={{
              textAlign: { sx: 'center', md: 'left' },
            }}
          >
            Copyright 2024 Nguyen Trong Qui
          </Typography>
          <Typography
            variant="caption"
            component="div"
            sx={{
              textAlign: { sx: 'center', md: 'left' },
            }}
          >
            @All right resrved
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
