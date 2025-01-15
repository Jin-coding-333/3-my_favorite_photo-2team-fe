import { AuthProvider } from './AuthProvier';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { UserProvider } from './UserProvider';
import useLocalStorage from '@/lib/hooks/useLocalStorige';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 60 * 1000 * 10,
    },
  },
});

export default function Provider({ children }) {
  const localstorages = useLocalStorage();
  const pathname = usePathname();
  const [token, setToken] = useState(localstorages.get('token'));

  useEffect(() => {
    // console.log(token);
    setToken(localstorages.get('token'));
  }, [pathname]);
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <UserProvider token={token}>{children}</UserProvider>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}
