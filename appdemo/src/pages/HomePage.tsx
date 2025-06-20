// src/pages/HomePage.tsx
import { Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Welcome to My App Demo!
      </Typography>
      <Button variant="contained" onClick={() => navigate('/form')}>
        Go to Form
      </Button>
    </Box>
  );
}
