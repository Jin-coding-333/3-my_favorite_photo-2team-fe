/** 이곳에는 편의성 기능들 hook 을 작성해주세요 */

/**
 * 첫 글자 대문자로 변환
 * @param {string} str string
 * @returns String
 */
export function useFirstUpperCase(str) {
  return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1);
}

export function onlyNumber(number) {
  const regex = /^[0-9]+$/;
  return regex.test(number);
}

export function startHourlyEvent() {
  const now = new Date();
  const msToNextHour =
    (60 - now.getMinutes()) * 60 * 1000 - now.getSeconds() * 1000 - now.getMilliseconds();

  // 정각까지 남은 시간 이후 실행
  setTimeout(() => {
    console.log('정각 이벤트 발생!');
    triggerEvent(); // 정각 이벤트 발생

    // 이후 매 정각(60분 간격)마다 실행
    setInterval(triggerEvent, 60 * 60 * 1000);
  }, msToNextHour);
}

function triggerEvent() {
  console.log('정각 이벤트 실행!', new Date().toLocaleTimeString());
  // 정각 이벤트 코드 작성 (예: API 호출, 상태 업데이트 등)
}
