import { useSyncExternalStore } from 'react';

const useIsMobileView = () => {
  //모바일 사이즈 확인

  const subscribe = (callback) => {
    window.addEventListener('resize', callback);
    return () => window.removeEventListener('resize', callback);
  };

  const getSnapshot = () => window.innerWidth <= 744;
  const getServerSnapshot = () => false; // 서버 환경에서는 모바일 뷰가 없으므로 기본값 false

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};
export default useIsMobileView;
