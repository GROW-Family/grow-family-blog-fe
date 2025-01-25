'use client';

import Scrollbar from '@libs/scrollbar/Scrollbar';
import { Box } from '@mui/material';
import NavItem from './NavItem';

export type NavType = {
  subheader: string;
  items: Array<{
    title: string;
    path: string;
    icon?: string;
  }>;
};

const NAV: NavType[] = [
  {
    subheader: 'Bài viết',
    items: [
      {
        title: 'Bài viết của tôi',
        path: '/',
        icon: '',
      },
      {
        title: 'Bài viết nháp',
        path: '/',
        icon: '',
      },
    ],
  },
];

function NavVertical() {


  return (
    <Box
      sx={{
        height: '100%',
        width: 300,
        bgcolor: '#fff',
        pt: { lg: 11, md: 8 },
        padding: 2,
      }}
    >
      <Scrollbar>
        {NAV.map((e) => (
          <NavItem key={e.subheader} nav={e} />
        ))}
      </Scrollbar>
    </Box>
  );
}

export default NavVertical;
