import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/axios';

// THUNKS
export const register = createAsyncThunk(
  'auth/register',
  async (formData) => {
    const res = await api.post('/auth/register', formData);
    return res.data.token;
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (formData) => {
    const res = await api.post('/auth/login', formData);
    return res.data.token;
  }
);

// SLICE
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    status: null,
  },
  reducers: {
    logout(state) {
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.token = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
