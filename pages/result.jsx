// export default function Result() {
//   return (
//     <>
//       <h1>Result</h1>
//     </>
//   );
// }

import React, { useState } from 'react';
import Modal from '@/components/modal/ModalCommon.jsx';

export default function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('login');

  const handleOpenModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleConfirm = () => {
    alert(`확인 버튼 클릭`); //page적용시 삭제 예정
    setModalOpen(false); //현재는 false로 모달 닫기로만 구현, page적용시 클릭했을때 닫기와 동시에 다음 로직 구현필요
  };

  return (
    <div>
      {/* //렌더링 테스트를 위해 적용 page적용시 삭제예정 */}
      <button onClick={() => handleOpenModal('login')} style={{ color: 'orange' }}>
        로그인 모달 열기
      </button>{' '}
      <br />
      <button onClick={() => handleOpenModal('exchangeApproval')} style={{ color: 'orange' }}>
        교환 제시 승인 모달 열기
      </button>
      <br />
      <button onClick={() => handleOpenModal('exchangeRejection')} style={{ color: 'orange' }}>
        교환 제시 거절
      </button>
      <br />
      <button onClick={() => handleOpenModal('buyPhotoCard')} style={{ color: 'orange' }}>
        포토 카드 구매
      </button>
      <br />
      <button onClick={() => handleOpenModal('stopSelling')} style={{ color: 'orange' }}>
        포토 카드 판매 내리기
      </button>
      {/* //메인 기능 모달창 구현 */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
        type={modalType}
      />
    </div>
  );
}
