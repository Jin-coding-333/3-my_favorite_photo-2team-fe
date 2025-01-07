import styles from "@/styles/pages/Result.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";
import Link from "next/link";

export default function Result() {

  const result = 'false'
  const type = 'exchangeSuggestionRegistration'

  let content = {
    mainText: '',
    subText: '',
    buttonText: ''
  }

  switch (type) {
    case 'salesRegistration':
      content = {
        message: '판매 등록',
        buttonText:
          result === 'success' ?
            '나의 판매 포토카드에서 확인하기' :
            '마켓플레이스로 돌아가기',
        buttonUrl:
          result === 'success' ?
            '/my-sale-photocard' :
            '/',
        exitButtonUrl: '/',
      };
      break;
    case 'purchaseRegistration':
      content = {
        message: '구매',
        buttonText:
          result === 'success' ?
            '마이갤러리에서 확인하기' :
            '마켓플레이스로 돌아가기',
        buttonUrl:
          result === 'success' ?
            '/my-gallery' :
            '/',
        exitButtonUrl: '/',
      };
      break;
    case 'exchangeSuggestionRegistration':
      content = {
        message: '교환 제시',
        buttonText:
          result === 'success' ?
            '나의 판매 포토카드에서 확인하기' :
            '마켓플레이스로 돌아가기',
        buttonUrl:
          result === 'success' ?
            '/my-sale-photocard' :
            '/',
        exitButtonUrl: '/',
      };
      break;
    case 'creationPhotocardRegistration':
      content = {
        message: '포토카드 생성',
        buttonText:
          result === 'success' ?
            '마이갤러리에서 확인하기' :
            '마이갤러리로 돌아가기',
        buttonUrl:
          result === 'success' ?
            '/my-gallery' :
            `/my-gallery/photocard/${'photocardId'}`,
        exitButtonUrl: '/',
      };
      break;
  }

  return (
    <div className={styles.resultContainer}>
      <div className={styles.resultBox}>
        <h1 className={styles.mainText}>
          {content.message}
          {result === 'success' ?
            <span className={styles.resultSuccessText}> 성공</span> :
            <span className={styles.resultFailureText}> 실패</span>}
        </h1>
        <div className={styles.subTextBox}>
          <p className={styles.subText}>
            [{'LEGENDARY '}| {'우리집 앞마당'}] {0}장 {content.message}에
            {result === 'success' ? ' 성공' : ' 실패'}했습니다!
          </p>
        </div>
        <Link href={`${content.buttonUrl}`}>
          <Button
            className={styles.buttonComponent}
            type="secondary">
            <span className={styles.buttonText}>{content.buttonText}</span>
          </Button>
        </Link>
        {/* x 버튼 */}
        <Link href={content.exitButtonUrl}>
          <div className={styles.closeBtn} />
        </Link>
      </div>
      <Link href={content.exitButtonUrl}>
        <div
          className={styles.backPageButton}
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
      </Link>
    </div >
  );
}
