import styles from '@/styles/components/card/Card.module.css';

export default function Card() {
  const isExchange = true;
  const isMine = false;
  return (
    <div className={styles.cardBox}>
      <div className={styles.imgBox}>이미지</div>
      <div className={styles.contentsBox}>
        <div className={styles.contents}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {!isExchange ? (
          <div className={styles.brandBox}>최애의 포토</div>
        ) : (
          <div className={styles.exchangeBtBox}>
            <button>거절하기</button> <button>승인하기</button>{' '}
          </div>
        )}
      </div>
    </div>
  );
}
