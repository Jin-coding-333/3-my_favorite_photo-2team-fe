import React, { useState } from 'react';
import Modal from '@/components/modal/Modal.jsx'; // Modal 컴포넌트의 경로를 올바르게 설정하세요.

export default function ModalExample() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const handleOpenModal = (cardId) => {
    setSelectedCardId(cardId); // 선택된 카드의 ID 설정
    setModalOpen(true); // 모달 열기
  };

  const handleCloseModal = () => {
    setModalOpen(false); // 모달 닫기
    setSelectedCardId(null); // 선택된 카드 초기화
  };

  const handleConfirm = () => {
    console.log('모달 확인 버튼 클릭');
    handleCloseModal(); // 모달 닫기
  };

  return (
    <div>
      <h1>포토카드 모달 테스트</h1>
      <button onClick={() => handleOpenModal(1)}>포토카드 1 상세 보기</button>
      <button onClick={() => handleOpenModal(2)}>포토카드 2 상세 보기</button>
      <button onClick={() => handleOpenModal(3)}>포토카드 3 상세 보기</button>

      {/* 모달 컴포넌트 */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
        type="buyPhotoCard"
        cardId={selectedCardId}
      />
    </div>
  );
}
