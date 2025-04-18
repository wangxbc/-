import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api/users',
  timeout: 10000,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    if (response.data.code !== 1) {
      return Promise.reject(response.data);
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
