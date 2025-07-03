import axios from 'axios';
import store from '../app/store';

const api = axios.create({
  baseURL: '/api',   // proxy makes this => http://localhost:5001/api
});

api.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
