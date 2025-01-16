import PointModal from '@/components/modal/PointModal';
import { oneHour } from '@/lib/data/time';
import { createContext, useContext, useEffect } from 'react';

const EventContext = createContext(null);

export function EventProvider({ children }) {
  function logAtEveryHour() {
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
    console.log(`Current time: ${now.toISOString()}. Waiting for the next hour...`);

    // 다음 정각에 실행
    setTimeout(() => {
      console.log(`Exact hour: ${new Date().toISOString()}`);

      // 이후 매시간 정각마다 실행
      setInterval(() => {
        console.log(`정각이에요~`);
        console.log(`Exact hour: ${new Date().toISOString()}`);
      }, setTime); // 1시간마다 실행 (3600000ms)
    }, timeToNextHour);
  }
  useEffect(() => {
    logAtEveryHour();
  }, []);
  // 실행
  return (
    <EventContext.Provider value={{}}>
      <PointModal></PointModal>
      {children}
    </EventContext.Provider>
  );
}

export function useEvent() {
  const context = useContext(EventContext);
  if (!context) throw new Error('EventProvider 안에서 사용해야함');
  return context;
}
