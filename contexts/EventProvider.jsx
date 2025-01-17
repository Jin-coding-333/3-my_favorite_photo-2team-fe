import PointModal from '@/components/modal/PointModal';
import { pointChkEventApi } from '@/lib/api/user/eventApi';
import { oneHour } from '@/lib/data/time';
import { createContext, use, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthProvier';
import { useQuery } from '@tanstack/react-query';

const EventContext = createContext(null);

export function EventProvider({ children, token }) {
  const [open, setOpen] = useState(true);

  const {
    data: event,
    isFetched,
    isPending,
    refetch,
    isStale,
  } = useQuery({
    queryKey: ['event'],
    queryFn: pointChkEventApi,
    enabled: !!token,
    staleTime: oneHour,
  });
  useEffect(() => {
    if (isFetched) {
      setOpen(event);
      console.log(event);
    }
  }, []);

  useEffect(() => {
    if (isStale && token) {
      setOpen(true);
      refetch();
    }
  }, [isStale]);

  return (
    <EventContext.Provider value={{}}>
      <PointModal refetch={refetch} isPending={isPending} open={open}></PointModal>
      {children}
    </EventContext.Provider>
  );
}

export function useEvent() {
  const context = useContext(EventContext);
  if (!context) throw new Error('EventProvider 안에서 사용해야함');
  return context;
}
