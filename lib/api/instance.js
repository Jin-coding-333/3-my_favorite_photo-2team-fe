import axios from 'axios';
import useLocalStorage from '../hooks/useLocalStorige';
const instance = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true,
});

const localStorages = useLocalStorage();

instance.interceptors.request.use(
  (config) => {
    const token = localStorages.get('token');
    console.log(token);
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (err) => {
    console.log('interceptor', err);
    return Promise.reject(err);
  },
);
export default instance;
