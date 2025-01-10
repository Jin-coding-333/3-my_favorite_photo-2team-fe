import styles from '@/styles/components/modal/SellMyPhotoModal.module.css';
import PhotoCard from '@/components/card/photoCard/PhotoCard';
import { useState, useEffect, useRef } from 'react';

export default function SellMyPhotoModal({ isModal, handleModal, modalType }) {
  const [positionY, setPositionY] = useState(0); // Y축 위치 저장 초기값 0
  const [dragging, setDragging] = useState(false); // 드래그 중인지
  const [offsetY, setOffsetY] = useState(0); // 드래그 시작 지점에서의 y축 편차차
  const [modalHeight, setModalHeight] = useState(0); // 모달 높이 동적 계산

  const modalRef = useRef(null); // 현재 모달 높이 측정을 위한 ref -> modalContents div에 넣을거거

  // 창 크기 변경 시 모달 높이 업데이트
  const updateModalHeight = () => {
    if (modalRef.current) {
      setModalHeight(modalRef.current.offsetHeight); // 모달 높이 계산
    }
  };

  useEffect(() => {
    if (isModal) {
      updateModalHeight(); // 모달이 열리면 높이 계산
    }
    // 윈도우 크기 변경 시 높이 재계산
    window.addEventListener('resize', updateModalHeight);
    return () => {
      window.removeEventListener('resize', updateModalHeight);
    };
  }, [isModal]); // 모달 열릴 때마다 높이 계산

  const closeModalHeight = modalHeight / 2;

  //---------윈도우 버전 -----------------//
  const handleMouseDown = (e) => {
    e.preventDefault(); // 클릭하면 자꾸 뭐가 떠서 이거 넣었어요
    setDragging(true); //누르면 드래그 시작
    setOffsetY(e.clientY - positionY); // Y축 기준으로 오프셋 저장
  };

  const handleMouseMove = (e) => {
    if (!dragging) return; // 안눌렸으면 끝내!
    const newY = e.clientY - offsetY; //현재 y
    if (newY >= 0) {
      // 아래로만 이동 가능
      setPositionY(newY);
    }
  };

  const handleMouseUp = () => {
    if (positionY >= closeModalHeight) {
      handleModal(); // 모달 닫기
      setPositionY(0);

      setDragging(false);
    } else {
      setPositionY(0); // 원래 위치로 복원
      setDragging(false);
    }
  };
  //--------------모바일 버전-----------------//
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setDragging(true);
    setOffsetY(touch.clientY - positionY);
  };

  const handleTouchMove = (e) => {
    if (!dragging) return;
    const touch = e.touches[0];
    const newY = touch.clientY - offsetY;
    if (newY >= 0) {
      // 아래로만 이동 가능
      setPositionY(newY);
    }
  };

  const handleTouchEnd = () => {
    setDragging(false);
    if (positionY >= closeModalHeight) {
      // 현재 y값이 닫는 지점보다 낮으면면
      handleModal(); // 모달 닫기
      setPositionY(0); // y값 초기화화
      setDragging(false); //드래그 중 아님!
    } else {
      setPositionY(0); // 원래 위치로 복원
      setDragging(false); // 드래그 중 아님!
    }
  };

  return (
    <div>
      {isModal ? (
        <div
          className={styles.modalBackground}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={modalRef}
            className={styles.modalContents}
            onMouseUp={handleMouseUp}
            style={{
              transform: `translateY(${positionY}px)`, // 모달 창 y값 변경
              transition: dragging ? 'none' : 'transform 0.3s ease-in-out', // 놓았을 때 천천히..애니메이션 효과...
            }}
          >
            {/* 얘는 태블릿부터 보임 드래그로 끄기기 */}
            <div
              className={styles.closeModal}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              <div className={styles.closeModalHandle} />
            </div>
            {/* 얘는 윈도우만 보임 버튼으로 끄기*/}
            <button type="button" className={styles.xBt} onClick={handleModal}>
              X
            </button>
            {modalType === 'lastPage' ? (
              <button type="button" className={styles.lastPageBt} onClick={handleModal}>
                ❬
              </button>
            ) : (
              ''
            )}

            {/* 여기 아래에다가 내용 넣기 */}
            <div className={styles.mainContents}>
              <div className={styles.pagename}>마이갤러리</div>
              <div className={styles.topBanner}>
                <div className={styles.title}>나의 포토카드 판매하기</div>
                <div className={styles.inputBox}>
                  <div className={styles.search}>
                    <input />
                  </div>
                  <div className={styles.dropdownGrade}>등급 </div>
                  <div className={styles.dropdownGenre}>장르 </div>
                </div>
              </div>
              <div className={styles.holdingPhotoBox}>
                <PhotoCard cardType="myCard" />
                <PhotoCard cardType="myCard" />
                <PhotoCard cardType="myCard" />
                <PhotoCard cardType="myCard" />
                <PhotoCard cardType="myCard" />
                <PhotoCard cardType="myCard" />
              </div>
            </div>
            {/* 여기 위에다가 내용 넣기기 */}
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
