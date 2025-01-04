import styles from "@/styles/pages/Result.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

export default function Result() {

  const result = {
    success: '성공',
    fail: '실패',
  };

  const backPage = {
    MarketPlace1: {
      title: '판매 등록 결과 페이지',
      success: '나의 판매 포토카드에서 확인하기',
      fail: '마켓플레이스로 돌아가기',
    },
    MarketPlace2: {
      title: '구매 결과 페이지',
      success: '마이갤러리에서 확인하기',
      fail: '마켓플레이스로 돌아가기',
    },
    MarketPlace3: {
      title: '교환 제시 결과 페이지',
      success: '나의 판매 포토카드에서 확인하기',
      fail: '마켓플레이스로 돌아가기',
    },
    MyGallery: {
      title: '포토카드 생성 결과 페이지',
      success: '마이갤러리에서 확인하기',
      fail: '마이갤러리로 돌아가기',
    },
  }

  return (
    <div className={styles.resultContainer}>
      <div className={styles.resultBox}>
        <h1 className={styles.mainText}>
          판매 등록 <span className={styles.resultText}>{'성공'}</span>
        </h1>
        <div className={styles.subTextBox}>
          <p className={styles.subText}>
            [{'LEGENDARY'}| {'우리집 앞마당'}] {'2'}장 판매 등록에 {'성공'}했습니다!
          </p>
        </div>
        <Button
          className={styles.buttonComponent}
          type="secondary" size="xl">
          나의 판매 포토카드에서 확인하기
        </Button>
        {/* x 버튼 */}
        <div className={styles.closeBtn} />
      </div>
      <div
          className={styles.backPageButton}
          style={{
            position: 'relative',
          }}
        >
          <Image
            src="/icon/type=back.png"
            alt="backPage button"
            fill
            styles={{
              objectFit: 'cover',
            }}
          />
        </div>
    </div >
  );
}