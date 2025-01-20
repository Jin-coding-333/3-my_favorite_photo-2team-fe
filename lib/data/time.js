import useLocalStorage from '../hooks/useLocalStorige';

export const oneHour = 60 * 60 * 1000;
export const oneHourLater = new Date(new Date().getTime() + oneHour);

export function startOneHourTimer(date, setText, setOpen, cb) {
  const local = useLocalStorage();
  const token = local.get('token');
  const startTime = new Date(date);
  const endTime = new Date(startTime.getTime() + 5000000); // 1시간 추가

  const timerInterval = setInterval(() => {
    const now = new Date(); // 현재 시간
    const remainingTime = Math.max(0, endTime - now); // 남은 시간(ms)

    if (remainingTime === 0) {
      clearInterval(timerInterval); // 타이머 정지
      // cb();
      console.log('Timer Complete!');
      return;
    }

    // 남은 시간을 시:분:초로 변환
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    setText(`${String(minutes).padStart(2, '0')}분 ${String(seconds).padStart(2, '0')}초`);
  }, 1000);
}
