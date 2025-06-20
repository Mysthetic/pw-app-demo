import { TextField, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function FormPage() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await api.post('/user', { name });
    alert('Submitted!');
    navigate('/data');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <Typography variant="h5">Enter your name</Typography>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        sx={{ my: 2 }}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}
