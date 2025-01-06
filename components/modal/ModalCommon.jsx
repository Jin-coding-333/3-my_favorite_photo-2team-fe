import React from 'react';
import styles from '@/styles/components/modal/Modal.module.css';

export default function Modal({ isOpen, onClose, onConfirm, title, message }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.message}>{message}</p>
        <button className={styles.confirmButton} onClick={onConfirm}>
          확인
        </button>
      </div>
    </div>
  );
}
