import React, { useState } from 'react';
import Modal, { modalTypes } from '@/components/modal/Modal.jsx';

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const mockCardData = {
    grade: 'RARE',
    name: 'Sunset Landscape',
    count: 2,
  };

  const handleOpenModal = (type) => {
    setModalType(type);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleConfirmAction = () => {
    console.log(`${modalType} confirmed!`);
    setIsOpen(false);
  };

  return (
    <div>
      <h1>Modal Example</h1>
      <button onClick={() => handleOpenModal('login')}>로그인 모달</button>
      <button onClick={() => handleOpenModal('exchangeApproval')}>교환 제시 승인</button>
      <button onClick={() => handleOpenModal('exchangeRejection')}>교환 제시 거절</button>
      <button onClick={() => handleOpenModal('exchangeCancel')}>교환 제시 취소</button>
      <button onClick={() => handleOpenModal('buyPhotoCard')}>포토카드 구매</button>
      <button onClick={() => handleOpenModal('stopSelling')}>포토카드 판매 내리기</button>

      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmAction}
        type={modalType}
        cardId={1} // 현재 mock 데이터로 처리
      />
    </div>
  );
}
