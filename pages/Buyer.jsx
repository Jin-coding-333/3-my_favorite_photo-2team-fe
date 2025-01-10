import Title from '@/components/title/Title.jsx';
import styles from '@/styles/components/Buyer/buyer.module.css';
import Card from '@/components/card/Card.jsx';
export default function Buyer() {
  return (
    <>
      <h1 className={styles.title1}>마켓플레이스</h1>
      <Title title="우리집 앞마당" size="L" />
      <Card type="buy" grade="RARE" genre="Fantasy" userNickName="John Doe"></Card>
    </>
  );
}
