'use client';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CodeIcon from '@mui/icons-material/Code';
import LabelIcon from '@mui/icons-material/Label';
import NotesIcon from '@mui/icons-material/Notes';
import { Box, Button, Container, Tooltip } from '@mui/material';
import { useAppDispatch } from '../../../hook/redux';
import { addNode } from '../../../redux/post/NewPostSlice';

export default function NewPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          position: 'fixed',
          padding: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            flexGrow: 1,
            height: 32,
            gap: 2,
          }}
        >
          <Tooltip title="Text editor">
            <Button
              variant="contained"
              onClick={() => dispatch(addNode('text'))}
            >
              <NotesIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Code hight light">
            <Button
              variant="contained"
              onClick={() => dispatch(addNode('code'))}
            >
              <CodeIcon />
            </Button>
          </Tooltip>
          <Button variant="contained" onClick={() => dispatch(addNode('image'))}>
            <AddPhotoAlternateIcon />
          </Button>
          <Tooltip title="Đề mục">
            <Button
              variant="contained"
              onClick={() => dispatch(addNode('lable'))}
            >
              <LabelIcon />
            </Button>
          </Tooltip>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            flexGrow: 0,
            height: 32,
          }}
        >
          <Button href="/post/review">Xem Trước</Button>
          <Button>Tạo Bài Viết</Button>
        </Box>
      </Container>

      <Box
        sx={{
          pt: { sx: 8, md: 11 },
          pl: { sx: 8, md: 11 },
          pr: { sx: 8, md: 11 },
          bgcolor: '#fff',
          width: '100%',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
