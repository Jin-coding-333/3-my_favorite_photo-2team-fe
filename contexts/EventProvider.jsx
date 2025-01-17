import PointModal from '@/components/modal/PointModal';
import { pointChkEventApi } from '@/lib/api/user/eventApi';
import { oneHour } from '@/lib/data/time';
import { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthProvier';

const EventContext = createContext(null);

export function EventProvider({ children, token }) {
  const { refetch, isPending } = useAuth();
  const [open, setOpen] = useState(true);
  async function chk() {
    const chk = await pointChkEventApi();
    setOpen(chk);
  }

  function everyHour() {
    const now = new Date();

    // 다음 정각까지 남은 시간 계산 (밀리초 단위)
    const nextHour = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      now.getHours() + 1,
      0,
      0,
      0,
    );
    const timeToNextHour = nextHour - now;
    const setTime = oneHour;

    // 다음 정각에 실행
    setTimeout(() => {
      console.log(`Event Start`);

      // 이후 매시간 정각마다 실행
      setInterval(() => {
        console.log(`Event Triger`);
        pointChkEventApi().then((res) => {
          setOpen(res);
          refetch();
        });
        console.log(`Event: ${new Date().toISOString()}`);
      }, 5000);
    }, 100);
  }
  useEffect(() => {
    chk();
    if (token) everyHour();
  }, []);

  return (
    <EventContext.Provider value={{ everyHour }}>
      <PointModal isPending={isPending} open={open}></PointModal>
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
