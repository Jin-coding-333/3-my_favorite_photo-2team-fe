import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  //   const [token, setToken] = useState(localStorage.getItem('token'));
  //   console.log(localStorage.getItem(''));
  useEffect(() => {
    // localStorage.setItem('token', token);
    // console.log(token);
  }, []);
  async function login({ email, password }) {
    console.log('login');
    try {
    } catch (err) {
      console.error(err);
    }
  }
  return <AuthContext.Provider value={{ login }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('AuthProvider를 찾을 수 없습니다.');
  }
  return context;
}
