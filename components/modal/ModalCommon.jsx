import React from 'react';
import styles from '@/styles/components/modal/Modal.module.css';
import Button from '@/components/button/Button.jsx';

export default function Modal({ isOpen, onClose, onConfirm, type, Data = {} }) {
  if (!isOpen) return null;

  const modalTypes = {
    login: {
      title: '로그인이 필요합니다.',
      message: (
        <>
          로그인 하시겠습니까?
          <br />
          다양한 서비스를 편리하게 이용하실 수 있습니다.
        </>
      ),
      confirmButtonText: '로그인',
    },
    exchangeApproval: {
      title: '교환 제시 승인',
      message: `[${Data.grade} | ${Data.cardName}] 카드와의 교환을 승인하시겠습니까?`,
      confirmButtonText: '승인하기',
    },
    exchangeRejection: {
      title: '교환 제시 거절',
      message: `[${Data.grade} | ${Data.cardName}] 카드와의 교환을 거절하시겠습니까?`,
      confirmButtonText: '거절하기',
    },
    exchangeCancel: {
      title: '교환 제시 취소',
      message: `[${Data.grade} | ${Data.cardName}] 교환 제시를 취소하시겠습니까?`,
      confirmButtonText: '취소하기',
    },
    buyPhotoCard: {
      title: '포토카드 구매',
      message: `[${Data.grade} | ${Data.cardName}] ${Data.count}장을 구매하시겠습니까?`,
      confirmButtonText: '구매하기',
    },
    stopSelling: {
      title: '포토카드 판매 내리기',
      message: '정말로 판매를 중단하시겠습니까?',
      confirmButtonText: '판매 내리기',
    },
  };

  const { title, message, confirmButtonText } = modalTypes[type] || {
    title: '',
    message: '',
    confirmButtonText: '',
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.message}>{message}</p>
        <Button type="primary" onClick={onConfirm} className={styles.confirmButton}>
          {confirmButtonText}
        </Button>
      </div>
    </div>
  );
}

// import React, { useState } from 'react';
// import Modal from '@/components/modal/ModalCommon.jsx';

// export default function App() {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [modalType, setModalType] = useState('login');
//   const [Data, setData] = useState({});

//   const handleOpenModal = (type) => {
//     setModalType(type);
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };

//   const handleConfirm = () => {
//     alert(`확인 버튼 클릭`); //page적용시 삭제 예정
//     setModalOpen(false); //현재는 false로 모달 닫기로만 구현, page적용시 클릭했을때 닫기와 동시에 다음 로직 구현필요
//   };

//   return (
//     <div>
//       {/* //렌더링 테스트를 위해 적용 page적용시 삭제예정 */}
//       <button onClick={() => handleOpenModal('login')} style={{ color: 'orange' }}>
//         로그인 모달 열기
//       </button>{' '}
//       <br />
//       <button onClick={() => handleOpenModal('exchangeApproval')} style={{ color: 'orange' }}>
//         교환 제시 승인 모달 열기
//       </button>
//       <br />
//       <button onClick={() => handleOpenModal('exchangeRejection')} style={{ color: 'orange' }}>
//         교환 제시 거절
//       </button>
//       <br />
//       <button onClick={() => handleOpenModal('buyPhotoCard')} style={{ color: 'orange' }}>
//         포토 카드 구매
//       </button>
//       <br />
//       <button onClick={() => handleOpenModal('stopSelling')} style={{ color: 'orange' }}>
//         포토 카드 판매 내리기
//       </button>
//       {/* //메인 기능 모달창 구현 */}
//       <Modal
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         onConfirm={handleConfirm}
//         type={modalType}
//       />
//     </div>
//   );
// }
