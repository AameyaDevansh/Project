import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/axios';

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const res = await api.get('/users');
  return res.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState: { list: [], status: null },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default usersSlice.reducer;
