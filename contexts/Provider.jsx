import { AuthProvider } from './AuthProvier';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { UserProvider } from './UserProvider';
import useLocalStorage from '@/lib/hooks/useLocalStorige';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { EventProvider } from './EventProvider';

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
    setToken(localstorages.get('token'));
  }, [pathname]);
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <UserProvider token={token}>
          <EventProvider token={token}>{children}</EventProvider>
        </UserProvider>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}
