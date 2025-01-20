import Button from '@/components/button/Button';
import Title from '@/components/title/Title';
import PageLayout from '@/layout/PageLayout';
import styles from '@/styles/pages/MarketPlace.module.css';
import MarketPlaceSearch from '@/components/pages/SearchSortComponent/MarketPlaceSearch';
import PhotocardList from '@/components/pages/market-place/PhotocardList';
import { useState } from 'react';
import PhotoCardModal from '@/components/modal/marketPlaceModal/PhotoCardModal';

export default function MarketPlace() {
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

  return (
    <>
      <PageLayout>
        <button onClick={openSellModal} style={{ background: '#ffffff' }}>
          판매하기
        </button>
        <PhotoCardModal isOpen={isModalOpen} onClose={closeModal} isEdit={modalType === 'edit'} />
        <div className={styles.marketPlaceTitle}>
          <Title
            title="마켓플레이스"
            size="L"
            buttonText="나의 포토카드 판매하기"
            buttonType="primary"
            onButtonClick={() => alert('판매하기')}
            variant="secondaryTitle"
          />
        </div>
        <MarketPlaceSearch />
        <PhotocardList />
      </PageLayout>
      <div className={styles.buttonStyle}>
        <Button className={styles.fixedButton} type="primary" onClick={() => alert('생성하기')}>
          나의 포토카드 판매하기
        </Button>
      </div>
    </>
  );
}
