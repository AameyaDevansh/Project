import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice';
// MUI imports
import { Box, Typography, TextField, Button, Stack } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(login(form));
    if (res.meta.requestStatus === 'fulfilled') nav('/dashboard');
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
        Login
      </Typography>
      <Box component="form" onSubmit={onSubmit} autoComplete="off">
        <Stack spacing={2}>
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
            Login
          </Button>
        </Stack>
      </Box>
      <p>New user? <Link to="/register">Register</Link></p>
    </Box>
  );
}
