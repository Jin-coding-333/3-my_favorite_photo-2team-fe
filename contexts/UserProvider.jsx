import { createCards, getCards } from '@/lib/api/user/cardApi';
import { oneHour } from '@/lib/data/time';
import { useQuery } from '@tanstack/react-query';
import { createContext, useContext } from 'react';
import { useAuth } from './AuthProvier';
import { useRouter } from 'next/navigation';

const UserContext = createContext(null);

export function UserProvider({ children, token = null }) {
  const router = useRouter();
  const { user } = useAuth();
  const {
    data: cards,
    refetch: cardRefetch,
    isPending: card_isPending,
  } = useQuery({
    queryKey: ['myCards', token],
    queryFn: getCards,
    // enabled: !!token,
    staleTime: oneHour,
  });

  async function cardCreate(body) {
    const entries = Object.entries(body);
    const check =
      entries
        .map((v) => {
          if (!v[1]) return false;
          return true;
        })
        .filter((x) => !x).length > 0;
    if (check) {
      return alert('값을 전부 입력해주세요.');
    }
    const addUser = { ...body, userId: user.id };
    const result = await createCards(addUser);
    if (result) {
      await cardRefetch();
      router.push('/');
      alert('카드를 생성했습니다.');
    }
  }

  return (
    <UserContext.Provider
      value={{ myCards: cards?.data, cardCreate, card_isPending }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('UserProvider안에서 사용해주세요');
  }
  return context;
}
