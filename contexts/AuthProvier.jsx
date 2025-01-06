import { loginApi, getUser, logoutApi } from '@/lib/api/auth/authApi';
import useLocalStorage from '@/lib/hooks/useLocalStorige';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const router = useRouter();
  const localStorages = useLocalStorage();
  const [token, setToken] = useState(null);
  const { data: user, isPending } = useQuery({
    queryKey: ['user', token],
    queryFn: getUser,
    enabled: !!token,
    staleTime: 60 * 60 * 1000,
  });

  useEffect(() => {
    setToken(localStorages.get('token'));
  }, [token]);

  async function login({ email, password }) {
    console.log('login');
    const response = await loginApi({ email, password });
    if (response && response.success) {
      setToken(localStorages.set('token', response.accessToken, 1000 * 60 * 60));
      router.push('/');
      return;
    }
    alert('틀림');
  }
  async function logout() {
    console.log('logout');
    const response = await logoutApi();
    if (response.success) {
      localStorage.clear('token');
      setToken(null);
    }
  }
  return (
    <AuthContext.Provider value={{ user, login, logout, isPending }}>
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
