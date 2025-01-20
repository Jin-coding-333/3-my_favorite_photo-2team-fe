import { useState } from 'react';
import Image from 'next/image';
import Title from '@/components/title/Title';
import CardDetail from '@/components/card/CardDetail';
import InputDropdownGrade from '@/components/dropdown/inputDropdown/InputDropdownGrade';
import InputDropdownGenre from '@/components/dropdown/inputDropdown/InputDropdownGenre';
import InputTextBox from '@/components/input/InputTextBox';
import Button from '@/components/button/Button';
import styles from '@/styles/components/modal/marketPlaceModal/PhotoCardModal.module.css';
import PhotoModal from '../photoModal/PhotoModal';

export default function PhotoCardModal({ isOpen, onClose, isEdit, Card, User }) {
  const [form, setForm] = useState({ genre: '', grade: '' });

  if (!isOpen) return null;

  return (
    <PhotoModal isModal={isOpen} handleModal={onClose} modalType="lastPage">
      <div className={styles.modalLayer}>
        <div className={styles.modalCloseBtns}>
          <div className={styles.modalName}>{isEdit ? '수정하기' : '나의 포토카드 판매하기'}</div>
        </div>
        <div className={styles.scrollableContainer}>
          <Title title={Card.name} className={styles.headerTitle} variant="default" />
          <div className={styles.itemCard}>
            <Image src={Card.imagePath} alt="카드 이미지" className={styles.imageSize} />
            <CardDetail userNickName={User.nickName} grade={Card.grade} genre={Card.genre} />
          </div>
          <div className={styles.formLayer}>
            <Title title="교환 희망 정보" className={styles.formTitle} variant="default" />
            <form className={styles.forms}>
              <InputDropdownGenre
                setForm={setForm}
                className={styles.dropdownLayerSize}
                classNameSize={styles.dropdownSize}
              />
              <InputDropdownGrade
                setForm={setForm}
                className={styles.dropdownLayerSize}
                classNameSize={styles.dropdownSize}
              />
            </form>
            <InputTextBox type="exchangeRequest" className={styles.textBox} />
          </div>
          <div className={styles.Buttons}>
            <Button type="secondary" className={styles.modalButton}>
              취소하기
            </Button>
            <Button type="primary" className={styles.modalButton}>
              {isEdit ? '수정하기' : '판매하기'}
            </Button>
          </div>
        </div>
      </div>
    </PhotoModal>
  );
}

/*
최신 pull 받아서 작성
컴포넌트 import 해주시고 sell은 판매하기이고 edit은 수정하기 입니다
버튼은 onClick으로 연결해주시면 됩니다 밑에 작성해놨습니다
import PhotoCardModal from '@/components/modal/marketPlaceModal/PhotoCardModal';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const openSellModal = () => {
    setModalType('sell');
    setIsModalOpen(true);
  };

  const openEditModal = () => {
    setModalType('edit');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

<button onClick={openSellModal} style={{ background: '#ffffff' }}>
  판매하기
</button>
<br />
<button onClick={openEditModal} style={{ background: '#ffffff' }}>
  수정하기
</button>
<PhotoCardModal isOpen={isModalOpen} onClose={closeModal} isEdit={modalType === 'edit'} />
*/
