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
    const refreshToken = localStorages.get('refreshToken');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    else if (refreshToken) config.headers['refreshAuth'] = 'refreshToken';
    console.log(config.headers);
    return config;
  },
  (err) => {
    console.log('interceptor', err);
    return Promise.reject(err);
  },
);
export default instance;
