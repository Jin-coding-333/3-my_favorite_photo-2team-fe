import { loginApi, getUser, logoutApi, refresh } from '@/lib/api/auth/authApi';
import useLocalStorage from '@/lib/hooks/useLocalStorige';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

const expire = 5000;
// 60 * 60 * 1000;

export function AuthProvider({ children }) {
  const router = useRouter();
  const localStorages = useLocalStorage();
  const [token, setToken] = useState(localStorages.get('token'));
  const { data: user, isPending } = useQuery({
    queryKey: ['user', token],
    queryFn: getUser,
    enabled: !!token,
    staleTime: expire,
  });

  useEffect(() => {
    console.log(localStorages.get('token'));
    setToken(localStorages.get('token'));
  }, [token]);

  async function login({ email, password }) {
    console.log('login');
    const response = await loginApi({ email, password });
    if (!!response && response.success) {
      setToken(localStorages.set('token', response.accessToken, expire));
      router.push('/');
      return;
    }
    alert('id 또는 password를 확인해주세요');
  }
  async function logout() {
    console.log('logout');
    const response = await logoutApi();
    if (response.success) {
      localStorage.clear('token');
      setToken(null);
    }
  }
  async function refreshToken(setUser) {
    const response = await refresh();
    if (!!response && response.success) {
      setToken(localStorages.set('token', response.accessToken, expire));
    }
  }
  return (
    <AuthContext.Provider value={{ user, login, logout, isPending, refreshToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('AuthProvider를 찾을 수 없습니다.');
  }
  return context;
}
