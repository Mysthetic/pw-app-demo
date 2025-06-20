// src/pages/FormPage.tsx
import { Box, Typography, TextField, Button } from '@mui/material';
import { useState } from 'react';

export default function FormPage() {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    alert(`Submitted: ${name}`);
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Form Page
      </Typography>
      <TextField
        label="Enter your name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
}
