import {
  loginApi,
  getUser,
  logoutApi,
  refresh,
  signupApi,
} from '@/lib/api/auth/authApi';
import { oneHour } from '@/lib/data/time';
import useLocalStorage from '@/lib/hooks/useLocalStorige';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const router = useRouter();
  const localStorages = useLocalStorage();
  const [token, setToken] = useState(null);
  const {
    data: user,
    isPending,
    isLoading,
    refetch,
    isStale,
    isRefetching,
    isFetched,
  } = useQuery({
    queryKey: ['user', token],
    queryFn: getUser,
    enabled: !!token,
    staleTime: oneHour,
  });

  useEffect(() => {
    const storedToken = localStorages.get('token');
    setToken(storedToken);
    if (isStale) {
      refreshToken();
    }
  }, [token, isStale]);

  async function login({ email, password }) {
    const response = await loginApi({ email, password });
    if (!!response && response.success) {
      console.log('login');
      setToken(localStorages.set('token', response.accessToken, oneHour));
      router.push('/');
      return;
    }
    alert('id 또는 password를 확인해주세요');
  }

  async function logout() {
    const response = await logoutApi();
    if (response.success) {
      console.log('logout');
      localStorage.clear('token');
      setToken(null);
      refetch();
      router.refresh();
    }
  }

  async function refreshToken() {
    if (token) return null;
    const response = await refresh();
    if (!!response && response.success) {
      setToken(localStorages.set('token', response.accessToken, oneHour));
      await refetch();
    }
  }

  async function signup(body = { email: '', password: '', nickName: '' }) {
    const signup = await signupApi(body);
    if (signup.success) {
      router.push('/login');
    }
    alert(signup.msg);
  }

  async function authChk() {
    if (isPending) throw null;
    if (!user) {
      alert('로그인 필요');
      router.push('/login');
    }
  }
  if (isLoading) return <div>Loading</div>;

  return (
    <AuthContext.Provider
      value={{
        user: user?.user,
        login,
        logout,
        refreshToken,
        isPending,
        isFetched,
        isRefetching,
        signup,
        refetch,
        authChk,
      }}
    >
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
