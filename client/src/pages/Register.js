import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../features/authSlice';
import { useNavigate, Link } from 'react-router-dom';
// MUI imports
import { Box, Typography, TextField, Button, Stack } from '@mui/material';

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(register(form));
    if (res.meta.requestStatus === 'fulfilled') {
      nav('/dashboard');
    } else {
      alert('Registration failed.');
    }
  };

  return (
    <Box
      sx={{
        bgcolor: '#f4f8fb',
        borderRadius: 3,
        p: 3,
        minWidth: { xs: '90vw', sm: 400 },
        boxShadow: 2,
        mx: 'auto',
        mt: 8,
        maxWidth: 400,
      }}
    >
      <Typography variant="h5" fontWeight={700} color="#205081" mb={2} textAlign="center">
        Register
      </Typography>
      <Box component="form" onSubmit={onSubmit} autoComplete="off">
        <Stack spacing={2}>
          <TextField
            name="name"
            label="Name"
            value={form.name}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            sx={{ bgcolor: 'white', borderRadius: 2 }}
          />
          <TextField
            name="email"
            label="Email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            sx={{ bgcolor: 'white', borderRadius: 2 }}
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            sx={{ bgcolor: 'white', borderRadius: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ fontWeight: 600, borderRadius: 2, minWidth: 100 }}
            fullWidth
          >
            Register
          </Button>
        </Stack>
      </Box>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </Box>
  );
}
