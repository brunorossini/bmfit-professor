import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.meutransporte.com/',
});

export default api;
