import { Add, DeleteForever } from '@mui/icons-material';

const getIcon = (iconName: unknown) => {
  switch (iconName) {
    case 'delete':
      return <DeleteForever color="error" />;
    case 'add':
      return <Add />;
    default:
      return <DeleteForever color="error" />;
  }
};

export default getIcon;
