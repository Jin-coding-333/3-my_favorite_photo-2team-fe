import styles from '@/styles/components/photoCard/PhotoCard.module.css';
import Button from '../button/Button';

// cardType : original, exchange, myCard, forSale
// isSoldOut : true, false
export default function Card({ cardType, isSoldOut }) {
  //
  // 데이터 예시시
  const imgUrl = '/img/image1.png';
  const title = '우리집 앞마당';
  const grade = 'RARE';
  const genre = '여행';
  const price = '4';
  const exchangeMessage = '스페인 여행 사진도 좋은데.. 우리집 앞마당 포토카드와 교환하고 싶습니다!';

  return (
    // 교환 화면이면 height 늘어남
    <div className={`${styles.cardBox} ${cardType === 'exchange' ? styles.exchangeHeight : ''}`}>
      <div className={styles.imgBox}>
        <img
          src={imgUrl}
          className={`${styles.img} ${isSoldOut ? styles.soldOutBg : ''}`}
          alt="포토 이미지"
        />
        {isSoldOut ? (
          <img src="/img/soldOut.png" alt="soldOut" className={styles.soldOutImg} />
        ) : (
          ''
        )}
      </div>
      <div className={styles.contentsBox}>
        <div className={styles.contents}>
          <div className={styles.firstContents}>
            {/* 포토 제목목 */}
            <div className={styles.title}>{title}</div>

            <div className={styles.space}>
              <div className={`${styles.flex} ${styles.gap10}`}>
                {/* 등급  */}
                <div className={styles.grade}> {grade} </div>
                <div className={styles.vertical}> | </div>
                {/* 장르 */}
                <div className={styles.genre}> {genre} </div>

                {cardType === 'exchange' ? (
                  // 교환 카드일 때 생성
                  <>
                    <div className={styles.vertical}> | </div>
                    <div className={`${styles.flex} ${styles.gap5}`}>
                      {/* 가격  */}
                      <div>{price} P </div> <div className={styles.grayText}> 에 구매</div>
                    </div>
                  </>
                ) : (
                  ''
                )}
              </div>
              <div className={styles.user}>미쓰손</div>
            </div>
          </div>
          <div className={styles.horizon}></div>
          {/* 여기도 내일 하기 */}
          <div className={styles.secondContents}>
            {cardType === 'exchange' ? (
              // 교환 메세지
              <div className={styles.exchangeMessage}>{exchangeMessage}</div>
            ) : (
              <>
                <div className={styles.space}>
                  <div>가격</div>
                  <div>4 P</div>
                </div>
                <div className={styles.space}>
                  <div>수량</div>
                  <div className={styles.flex}>
                    <div>2</div>
                    {cardType === 'original' ? <div className={styles.grayText}>/5</div> : ''}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {/* card 쓸 때 교환 아니면 false props 받기 */}
        {cardType !== 'exchange' ? (
          <div className={styles.brandBox}>최애의 포토</div>
        ) : (
          <div className={styles.exchangeBtBox}>
            <Button type="secondary" className={styles.btStyle}>
              거절하기
            </Button>
            <Button className={styles.btStyle}>승인하기</Button>
          </div>
        )}
      </div>
    </div>
  );
}
