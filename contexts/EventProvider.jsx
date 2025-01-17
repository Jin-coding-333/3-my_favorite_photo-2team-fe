import PointModal from '@/components/modal/PointModal';
import { pointChkEventApi } from '@/lib/api/user/eventApi';
import { oneHour } from '@/lib/data/time';
import { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthProvier';
import { useQuery } from '@tanstack/react-query';

const EventContext = createContext(null);

export function EventProvider({ children, token }) {
  const { isPending } = useAuth();
  const [open, setOpen] = useState(true);

  const {
    data: event,
    isFetched,
    refetch,
    isStale,
  } = useQuery({
    queryKey: ['event', open],
    queryFn: pointChkEventApi,
    enabled: !!token,
    staleTime: 60 * 1000,
  });

  useEffect(() => {
    if (isFetched) setOpen(event);
    if (isStale && token) {
      setOpen(event);

      refetch();
    }
  }, [isStale]);

  return (
    <EventContext.Provider value={{}}>
      <PointModal refetch={refetch} isPending={isPending} open={open}></PointModal>
      {children}

      <button
        style={{ fontSize: '30px', color: '#fff' }}
        onClick={() => {
          setOpen(true);
        }}
      >
        ddddd
      </button>
    </EventContext.Provider>
  );
}

export function useEvent() {
  const context = useContext(EventContext);
  if (!context) throw new Error('EventProvider 안에서 사용해야함');
  return context;
}
