import React, { useState } from 'react';
import styles from '@/styles/components/modal/PointModal.module.css';

export default function PointModal({ open }) {
  //모달 상태 관리
  const [isOpen, setIsOpen] = useState(!open);

  //모달 열기 함수
  const openModal = () => {
    setIsOpen(!open);
  };

  //모달 닫기 함수
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* 모달 열기 임시 버튼  */}
      <button onClick={openModal}>모달 열기</button>

      {isOpen !== undefined && isOpen && (
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
              매 시간 정각마다 돌아오는 기회!
              <br />
              랜덤 상자 뽑기를 통해 포인트를 획득하세요!
            </p>
            <p className={styles.timer}>
              다음 기회까지 남은 시간<span className={styles.highlight}> 59분 59초</span>
            </p>
            <div className={styles.giftContainer}>
              {/* 이미지를 클릭하면 포인트를 획득. 으로 수정 */}
              <img src="/random_box/box1.png" alt="randomBox1" className={styles.boxImg} />
              <img src="/random_box/box2.png" alt="randomBox2" className={styles.boxImg} />
              <img src="/random_box/box3.png" alt="randomBox3" className={styles.boxImg} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
