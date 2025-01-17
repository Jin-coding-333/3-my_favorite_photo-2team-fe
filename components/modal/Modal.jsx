import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '@/styles/components/modal/Modal.module.css';
import Button from '@/components/button/Button.jsx';

export default function Modal({ isOpen, onClose, onConfirm, type, cardId }) {
  const [cardData, setCardData] = useState();

  useEffect(() => {
    if (isOpen && cardId) {
      const fetchCardData = async () => {
        try {
          const shopId = 1;
          const response = await axios.get(`http://localhost:10000/api/shop/cards/${shopId}`);
          setCardData(response.data);
        } catch (error) {
          console.error('오류가 발생했습니다.', error);
        }
      };
      fetchCardData();
    }
  }, [isOpen, cardId]);

  if (!isOpen) return null;

  const selectedModal = modalTypes[type] || {
    title: '알림',
    message: '정의되지 않은 동작입니다.',
    confirmButtonText: '닫기',
  };

  const title = selectedModal.title;
  const message =
    typeof selectedModal.message === 'function'
      ? selectedModal.message(cardData || {})
      : selectedModal.message;
  const confirmButtonText = selectedModal.confirmButtonText;

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

export const modalTypes = {
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
    message: ({ grade, name }) => `[${grade} | ${name}] 카드와의 교환을 승인하시겠습니까?`,
    confirmButtonText: '승인하기',
  },
  exchangeRejection: {
    title: '교환 제시 거절',
    message: ({ grade, name }) => `[${grade} | ${name}] 카드와의 교환을 거절하시겠습니까?`,
    confirmButtonText: '거절하기',
  },
  exchangeCancel: {
    title: '교환 제시 취소',
    message: ({ grade, name }) => `[${grade} | ${name}] 교환 제시를 취소하시겠습니까?`,
    confirmButtonText: '취소하기',
  },
  buyPhotoCard: {
    title: '포토카드 구매',
    message: ({ grade, name, count = 1 }) => `[${grade} | ${name}] ${count}장을 구매하시겠습니까?`,
    confirmButtonText: '구매하기',
  },
  stopSelling: {
    title: '포토카드 판매 내리기',
    message: '정말로 판매를 중단하시겠습니까?',
    confirmButtonText: '판매 내리기',
  },
};
