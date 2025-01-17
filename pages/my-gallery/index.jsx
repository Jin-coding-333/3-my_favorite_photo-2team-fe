import Button from '@/components/button/Button';
import PhotocardList from '@/components/pages/market-place/PhotocardList';
import MyGallerySearch from '@/components/pages/SearchSortComponent/MyGallerySearch';
import CardCountStatus from '@/components/title/CardCountStatus';
import Title from '@/components/title/Title';
import PageLayout from '@/layout/PageLayout';
import styles from '@/styles/pages/MyGallery.module.css';

export default function MyGallery() {
  return (
    <>
      <PageLayout>
        <div className={styles.MyGalleryTitle}>
          <Title
            title="마이갤러리"
            size="L"
            buttonText="포토카드 생성하기"
            buttonType="primary"
            onButtonClick={() => alert('판매하기')}
            variant="secondaryTitle"
          />
        </div>

        <CardCountStatus page='myGallery'/>

        <MyGallerySearch />
        <PhotocardList />
      </PageLayout>
      <div className={styles.buttonStyle}>
        <Button className={styles.fixedButton} type="primary" onClick={() => alert('생성하기')}>
          포토카드 생성하기
        </Button>
      </div>
    </>
  );
}
