import Title from '@/components/title/Title.jsx';
import styles from '@/styles/components/Seller/Seller.module.css';
import Card from '@/components/card/Card.jsx';
import PhotoCard from '@/components/card/photoCard/PhotoCard.jsx';

export default function Seller() {
  const photoData = {
    title: '우리집 앞마당',
    user: '미쓰손',
    grade: 'RARE',
    genre: '여행',
    price: '4',
    count: '2',
    exchangeMessage: '스페인 여행 사진도 좋은데.. 우리집 앞마당 포토카드와 교환하고 싶습니다!',
  };

  return (
    <div>
      <div className={styles.Container}>
        <h1 className={styles.title}>마켓플레이스</h1>
        <Title className={styles.cardDetail} title="우리집 앞마당" size="L" />
        <div className={styles.centerContent}>
          <img className={styles.cardImg} src="#" />
          <Card
            className={styles.Card}
            type="buy"
            grade="RARE"
            genre="Fantasy"
            userNickName="John Doe"
          ></Card>
        </div>
        <Title className={styles.title} title="교환 제시 목록" size="L" />
        <div className={styles.Tradelist}>
          <PhotoCard cardType="exchange" isSoldOut={false} data={photoData} />
          <PhotoCard cardType="exchange" isSoldOut={false} data={photoData} />
        </div>
      </div>
    </div>
  );
}
