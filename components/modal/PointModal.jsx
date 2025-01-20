import React, { useEffect, useState } from 'react';
import styles from '@/styles/components/modal/PointModal.module.css';
import { pointEventApi } from '@/lib/api/user/eventApi';
import { useAuth } from '@/contexts/AuthProvier';
import { eventReset } from '@/lib/api/user/eventApi';

export default function PointModal({}) {
  const { refetch: userRefetch, user, isPending, isFetched } = useAuth();

  if (isPending || !user) return null;
  const { event } = user;

  const [isOpen, setIsOpen] = useState(!!!event);
  const [text, setText] = useState('');

  //모달 닫기 함수
  const closeModal = async () => {
    const result = await pointEventApi();
    if (result) {
      alert('자동으로 점수가 반영됩니다.');
      setIsOpen(false);
      userRefetch();
    }
    userRefetch();
  };

  useEffect(() => {
    const checkEventTrigger = () => {
      const now = new Date();
      // 현재 시간이 정각인지 확인
      if (now.getMinutes() === 0 && now.getSeconds() === 0) {
        userRefetch();
        eventReset();
        setIsOpen(true); // 모달 표시
      }
      const timeLog = `${59 - now.getMinutes()}분 ${60 - now.getSeconds()}초`;
      setText(timeLog);
      console.log(timeLog);
    };
    // 1초마다 이벤트 체크
    setInterval(checkEventTrigger, 1000);
  }, []);
  const pointEvent = async () => {
    const result = await pointEventApi();
    if (result) {
      setIsOpen(false);
      userRefetch();
    }
  };
  if (!!!text) return null;
  return (
    <div>
      {isOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            {/* 모달 내부 클릭은 닫히지 않도록 설정 */}
            <button className={styles.closeButton} onClick={closeModal}>
              X
            </button>
            <h2 className={styles.title}>
              랜덤<span className={styles.highlight}>포인트</span>
            </h2>
            <p className={styles.description}>
              1시간 마다 돌아오는 기회!
              <br />
              랜덤 상자 뽑기를 통해 포인트를 획득하세요!
            </p>
            <p className={styles.timer}>
              다음 기회까지 남은 시간 <span className={styles.highlight}>{text}</span>
            </p>
            <div className={styles.giftContainer}>
              {/* 이미지를 클릭하면 포인트를 획득. 으로 수정 */}
              <img
                src="/random_box/box1.png"
                alt="randomBox1"
                className={styles.boxImg}
                onClick={pointEvent}
              />
              <img
                src="/random_box/box2.png"
                alt="randomBox2"
                className={styles.boxImg}
                onClick={pointEvent}
              />
              <img
                src="/random_box/box3.png"
                alt="randomBox3"
                className={styles.boxImg}
                onClick={pointEvent}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
