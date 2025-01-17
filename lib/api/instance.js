import axios from 'axios';
import useLocalStorage from '../hooks/useLocalStorige';

const instance = axios.create({
  baseURL: 'http://localhost:8000',
  // baseURL: 'https://my-favorite-photo.onrender.com:10000',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

const localStorages = useLocalStorage();

instance.interceptors.request.use(
  (config) => {
    const token = localStorages.get('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (err) => {
    console.log('interceptor', err);
    return Promise.reject(err);
  },
);

export default instance;
