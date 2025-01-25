'use client'
import { Box, Grid2, Pagination, Typography } from '@mui/material';
import PostItem from './components/PostItem';

function BlogForYou() {
    

   return (
    <Box sx={{ width: '100%', pt: 4 }}>
      <Typography variant="h6" component="h6">
        Blog for you
      </Typography>
      <Grid2
        container
        rowSpacing={2}
        columnSpacing={2}
        columns={24}
        paddingTop={2}
      >
        {[...new Array(10)].map((_, index) => (
          <Grid2 key={index} size={6}>
            <PostItem />
          </Grid2>
        ))}
      </Grid2>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 2,
        }}
      >
        <Pagination count={10} variant="outlined" color="primary" />
      </Box>
    </Box>
  );
}

export default BlogForYou;
