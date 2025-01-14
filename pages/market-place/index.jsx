import Button from "@/components/button/Button";
import Title from "@/components/title/Title";
import PageLayout from "@/layout/PageLayout";
import styles from "@/styles/pages/MarketPlace.module.css"

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
      </PageLayout>
      <div className={styles.fixedButton} >
        <Button
          size="m"
          type="primary"
          onClick={() => alert('판매하기')}
        >
        나의 포토카드 판매하기  
        </Button>      
        </div>

    </>
  );
}
