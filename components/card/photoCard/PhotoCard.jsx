import styles from '@/styles/components/photoCard/PhotoCard.module.css';
import Button from '@/components/button/Button';
import useIsMobileView from '@/lib/hooks/useIsMobileView';
import ForSaleChip from './meta/ForSaleChip';

// cardType : original, exchange, myCard, forSale
// isSoldOut : true, false
export default function PhotoCard({ cardType, isSoldOut, data }) {
  // data.title 이렇게 가져올 수 있게
  // 데이터 예시
  const imagePath = '/img/image1.png';
  const name = '우리집 앞마당';
  const username = '미쓰손';
  const grade = 'RARE';
  const genre = '여행';
  const price = '4';
  const count = '2';
  const exchangeMessage = '스페인 여행 사진도 좋은데.. 우리집 앞마당 포토카드와 교환하고 싶습니다!';
  const status = '교환 제시 대기 중';

  // 모바일 크기 변화 감지
  const isMobileView = useIsMobileView();

  return (
    // 교환 화면이면 height 늘어남
    <div className={`${styles.cardBox} ${cardType === 'exchange' ? styles.exchangeHeight : ''}`}>
      <div className={styles.imgBox}>
        <img
          src={imagePath}
          className={`${styles.img} ${isSoldOut ? styles.soldOutBg : ''}`}
          alt="포토 이미지"
        />
        {cardType === 'forSale' ? <ForSaleChip status={status} /> : ''}
        {isSoldOut ? (
          <img src="/img/soldOut.png" alt="soldOut" className={styles.soldOutImg} />
        ) : (
          ''
        )}
      </div>
      <div className={styles.contentsBox}>
        <div className={styles.contents}>
          <div className={styles.firstContents}>
            {/* 포토 제목 */}
            <div className={styles.title}>{name}</div>

            <div
              className={`${cardType === 'exchange' ? styles.exchangePhotoInfo : styles.photoInfo}`}
            >
              <div className={`${styles.flex} ${styles.gap10}`}>
                {/* 등급  */}
                <div className={styles.grade}> {grade} </div>
                {/* 수평선 */}
                <div className={styles.vertical}> | </div>
                {/* 장르 */}
                <div className={styles.genre}> {genre} </div>
              </div>
              {cardType === 'exchange' ? (
                // 교환 카드일 때 생성
                <div className={styles.exchangeInfo}>
                  <div className={`${styles.flex} ${styles.gap10}`}>
                    <div className={styles.exchangeVertical}> | </div>
                    {/* 가격  */}
                    <div className={styles.numberText}>{price} P </div>
                    <div className={styles.grayText}> 에 구매</div>
                  </div>
                  <div className={styles.user}>{username}</div>
                </div>
              ) : (
                <div className={styles.user}>{username}</div>
              )}
            </div>
          </div>
          {/* 수평선 */}
          <div className={styles.horizon}></div>
          {/* 아래 내용 */}

          {cardType === 'exchange' ? (
            // 교환 메세지
            <div className={styles.exchangeMessage}>{exchangeMessage}</div>
          ) : (
            <div className={styles.secondContentsBox}>
              <div className={styles.secondContents}>
                <div className={styles.grayText}>가격</div>
                <div className={styles.numberText}>{price} P</div>
              </div>
              <div className={styles.secondContents}>
                <div className={styles.grayText}>수량</div>
                <div className={styles.flex}>
                  <div className={styles.numberText}>{count}</div>
                  {cardType === 'original' ? <div className={styles.grayText}>/5</div> : ''}
                </div>
              </div>
            </div>
          )}
        </div>
        {/* card 쓸 때 교환 아니면 false props 받기 */}
        {cardType !== 'exchange' ? (
          <div className={styles.logoBox}>
            <img src="/logo/logo.png" alt="logo" className={styles.logo} />
          </div>
        ) : (
          <div className={styles.exchangeBtBox}>
            <Button type="secondary" className={styles.btStyle}>
              <span className={styles.btFont}>{isMobileView ? '거절' : '거절하기'}</span>
            </Button>
            <Button className={styles.btStyle}>
              <span className={styles.btFont}>{isMobileView ? '승인' : '승인하기'}</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
