import Button from '@/components/button/Button';
import Title from '@/components/title/Title';
import PageLayout from '@/layout/PageLayout';
import styles from '@/styles/pages/MarketPlace.module.css';
import MarketPlaceSearch from '@/components/pages/SearchSortComponent/MarketPlaceSearch';
import PhotocardList from '@/components/pages/market-place/PhotocardList';
import PhotoModal from '@/components/modal/photoModal/PhotoModal';
import AllDragContents from '@/components/modal/photoModal/AllDragContents';
import { useState } from 'react';

export default function MarketPlace() {
  const [isModal, setIsModal] = useState(false);

  const handleModal = () => {
    setIsModal(!isModal);
  };
  return (
    <>
      <PageLayout>
        <div className={styles.marketPlaceTitle}>
          <Title
            title="마켓플레이스"
            size="L"
            buttonText="나의 포토카드 판매하기"
            buttonType="primary"
            onButtonClick={handleModal}
            variant="secondaryTitle"
          />
        </div>
        <MarketPlaceSearch />
        <PhotocardList />
      </PageLayout>
      <div className={styles.buttonStyle}>
        {/* <Button className={styles.fixedButton} type="primary" onClick={handleModal}>
          나의 포토카드 판매하기
        </Button> */}
      </div>
      <PhotoModal
        isModal={isModal}
        handleModal={handleModal}
        modalType="allDrag"
      >
        <AllDragContents
          title="나의 포토카드 판매하기"
          handleModal={handleModal}
        />
      </PhotoModal>
    </>
  );
}
