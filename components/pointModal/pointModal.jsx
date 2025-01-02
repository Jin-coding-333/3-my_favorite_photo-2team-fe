import React from 'react';
import styles from '../../styles/components/pointModal.module.css';

const pointModal = (idOpen, onClose) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      {/* 모달 바깥 영역 클릭 시 모달 닫기 */}
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* 모달 내부 클릭은 닫히지 않도록 설정 */}
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <h2 className={styles.title}>랜덤포인트</h2>
        <p className={styles.description}>
          1시간마다 돌아오는 기회! 랜덤 상자 뽑기를 통해 포인트를 획득하세요!
        </p>
        <p className={styles.timer}>다음 기회까지 남은 시간 59분 59초</p>
        <div className={styles.giftContainer}>
          <img src="/box1.png" alt="randomBox1" className={styles.box} />
          <img src="/box2.png" alt="randomBox2" className={styles.box} />
          <img src="/box3.png" alt="randomBox3" className={styles.box} />
        </div>
      </div>
    </div>
  );
};

export default pointModal;
