import Button from '@/components/button/Button';
import Title from '@/components/title/Title';
import PageLayout from '@/layout/PageLayout';
import styles from '@/styles/pages/MarketPlace.module.css';
import MarketPlaceSearch from '@/components/pages/SearchSortComponent/MarketPlaceSearch';

export default function MarketPlace() {
  return (
    <>
      <PageLayout>
        <Title
          title="마켓플레이스"
          size="L"
          buttonText="나의 포토카드 판매하기"
          buttonType="primary"
          onButtonClick={() => alert('판매하기')}
          variant="secondaryTitle"
        />
        <MarketPlaceSearch />
      </PageLayout>
      <div className={styles.buttonStyle}>
        <Button className={styles.fixedButton} type="primary" onClick={() => alert('생성하기')}>
          나의 포토카드 판매하기
        </Button>
      </div>
    </>
  );
}
