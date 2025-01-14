import Button from "@/components/button/Button";
import Title from "@/components/title/Title";
import PageLayout from "@/layout/PageLayout";
import styles from "@/styles/pages/MyGallery.module.css"

export default function MyGallery() {
  return (
    <>
    <PageLayout>
      <Title
        title="마이갤러리"
        size="L"
        buttonText="포토카드 생성하기"
        buttonType="primary"
        onButtonClick={() => alert('판매하기')}
        variant="secondaryTitle"
        />
    </PageLayout>
      <div className={styles.fixedButton} >
        <Button
          size="m"
          type="primary"
          onClick={() => alert('생성하기')}
        >
        포토카드 생성하기
        </Button>      
  </div>
    </>
  );
}
