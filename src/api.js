// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://a76e-2a09-bac5-3a04-1d05-00-2e4-15.ngrok-free.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

const token = localStorage.getItem('authToken');
if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default api;
