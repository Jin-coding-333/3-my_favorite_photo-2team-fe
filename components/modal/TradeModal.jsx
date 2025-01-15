import { useState } from 'react';
import InputTextBox from '../input/InputTextBox';
import PhotoModal from './photoModal/PhotoModal';
import styles from '@/styles/components/modal/TradeModal.module.css';
import Button from '../button/Button';

export default function TradeModal({ isModal }) {
  const [values, setValues] = useState({ offer: '' });
  return (
    <>
      <PhotoModal className={styles.tradeModal} modalType={1} isModal={true}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <InputTextBox
            name={'offer'}
            type="exchangeSuggestion"
            className={styles.offer}
            value={values.offer}
            setValue={setValues}
          ></InputTextBox>
          <div className={styles.btnArea}>
            <Button type="secondary" className={styles.btn}>
              취소하기
            </Button>
            <Button type="primary" className={styles.btn}>
              교환하기
            </Button>
          </div>
        </div>
      </PhotoModal>
    </>
  );
}
