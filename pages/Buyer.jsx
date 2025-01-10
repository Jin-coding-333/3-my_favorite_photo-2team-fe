import Title from '@/components/title/Title.jsx';
import styles from '@/styles/components/Buyer/Buyer.module.css';
import Card from '@/components/card/Card.jsx';
export default function Buyer() {
  return (
    <div>
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
      <Title title="교환 제시 목록" size="L" />
    </div>
  );
}
