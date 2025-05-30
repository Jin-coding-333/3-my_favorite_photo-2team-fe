import styles from '@/styles/components/photoCard/PhotoCard.module.css';
import Button from '@/components/button/Button';
import useIsMobileView from '@/lib/hooks/useIsMobileView';
import ForSaleChip from './meta/ForSaleChip';
import CardGrade from './meta/CardGrade';
import { useAuth } from '@/contexts/AuthProvier';
import src from '@/lib/hooks/useSrc';
import Image from 'next/image';

// cardType : original, exchange, myCard, forSale
// isSoldOut : true, false
export default function PhotoCard({ cardType, data }) {
  const { user } = useAuth();

  // 데이터 유효성 검사
  if (cardType === 'myCard' && (!data.cards || !data.cards[0])) return null;
  if (cardType !== 'myCard' && !data.card) return null;

  const card = cardType === 'myCard' ? data.cards[0] : data.card;
  const imgUrl = src(card?.imagePath || '');
  const title = cardType === 'myCard' ? card?.name : data?.name;
  const userNickName =
    cardType === 'myCard' ? user?.nickName : data?.user?.nickName;
  const grade = card?.grade;
  const genre = card?.genre;
  const price = cardType === 'myCard' ? card?.price : data?.price;
  const totalQuantity =
    cardType === 'myCard' ? data?.count : data?.totalQuantity;
  const remainingQuantity = data?.remainingQuantity;
  const exchangeMessage = card?.content;

  const status = '교환 제시 대기 중';
  const isSoldOut = data.remainingQuantity === 0;
  // 모바일 크기 변화 감지
  const isMobileView = useIsMobileView();

  return (
    // 교환 화면이면 height 늘어남
    <div
      className={`${styles.cardBox} ${cardType === 'exchange' ? styles.exchangeHeight : ''}`}
    >
      <div className={styles.imgBox}>
        <div
          className={`${styles.img} ${isSoldOut ? styles.soldOutBg : ''}`}
          style={{ position: 'relative', width: '100%', height: '100%' }}
        >
          <Image
            src={imgUrl}
            alt="포토 이미지"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={cardType === 'original'}
          />
        </div>
        {cardType === 'forSale' ? <ForSaleChip status={status} /> : ''}
        {isSoldOut ? (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
            }}
          >
            <Image
              src="/img/soldOut.png"
              alt="soldOut"
              width={80}
              height={80}
              className={styles.soldOutImg}
            />
          </div>
        ) : (
          ''
        )}
      </div>
      <div className={styles.contentsBox}>
        <div className={styles.contents}>
          <div className={styles.firstContents}>
            {/* 포토 제목 */}
            <div className={styles.title}>{title}</div>

            <div
              className={`${cardType === 'exchange' ? styles.exchangePhotoInfo : styles.photoInfo}`}
            >
              <div className={`${styles.flex} ${styles.gap10}`}>
                {/* 등급  */}
                <div className={styles.grade}>
                  <CardGrade grade={grade} type="rarityThickness" />
                </div>
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
                  <div className={styles.user}>{userNickName}</div>
                </div>
              ) : (
                <div className={styles.user}>{userNickName}</div>
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
                  <div className={styles.numberText}>
                    {cardType === 'myCard' ? totalQuantity : remainingQuantity}
                  </div>
                  {cardType === 'original' ? (
                    <div className={styles.grayText}>/{totalQuantity}</div>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        {/* card 쓸 때 교환 아니면 false props 받기 */}
        {cardType !== 'exchange' ? (
          <div className={styles.logoBox}>
            <div
              style={{ position: 'relative', width: '100%', height: '100%' }}
            >
              <Image
                src="/logo/logo.png"
                alt="logo"
                className={styles.logo}
                width={40}
                height={40}
              />
            </div>
          </div>
        ) : (
          <div className={styles.exchangeBtBox}>
            <Button type="secondary" className={styles.btStyle}>
              <span className={styles.btFont}>
                {isMobileView ? '거절' : '거절하기'}
              </span>
            </Button>
            <Button className={styles.btStyle}>
              <span className={styles.btFont}>
                {isMobileView ? '승인' : '승인하기'}
              </span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
