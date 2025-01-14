import styles from '@/styles/components/Buyer/Buyer.module.css';
import Title from '@/components/title/Title.jsx';
import Card from '@/components/card/Card.jsx';
import Button from '@/components/button/Button.jsx';

export default function Buyer() {
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
        <div className={styles.bottomContent}>
          <Title className={styles.Subtitle} title="교환 희망 정보" size="L" />
          <Button className={styles.Button} type="primary">
            {' '}
            포토카드 교환하기
          </Button>
          {/* <p>푸릇푸릇한 여름 풍경, 눈 많이 내린 겨울 풍경 사진에 관심이 많습니다.</p> */}
        </div>
      </div>
    </div>
  );
}
