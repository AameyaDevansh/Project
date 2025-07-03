import axios from 'axios';
import store from '../app/store';

// Use REACT_APP_API_BASE_URL from .env, fallback to '/api' for local dev
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || '/api', // Set REACT_APP_API_BASE_URL in .env for deployment
});

api.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
