import { Modal, Box, Typography } from '@mui/material';
import type { User } from '../types/User';

interface Props {
  open: boolean;
  user: User | null;
  onClose: () => void;
}

export default function MyModal({ open, user, onClose }: Props) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ p: 4, bgcolor: 'blue', width: 300, mx: 'auto', mt: '10%' }}>
        <Typography variant="h6">User Detail</Typography>
        {user && (
          <>
            <Typography>ID: {user.id}</Typography>
            <Typography>Name: {user.name}</Typography>
          </>
        )}
      </Box>
    </Modal>
  );
}
