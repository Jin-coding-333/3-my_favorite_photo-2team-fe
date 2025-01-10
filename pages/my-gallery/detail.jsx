import Card from '@/components/card/Card';
import Title from '@/components/title/Title';
import styles from '@/styles/pages/my-gallery/Detail.module.css';
import Image from 'next/image';

export default function Detail({
  card = {
    name: '카드이름',
    grade: 'COMMON',
    genre: 'unknwon',
    userName: '유저이름',
    description: '설명',
    img: '/img/',
    price: 0,
    count: 0,
  },
}) {
  return (
    <div className={styles.detail}>
      <Title size="M" title={card.name} variant="secondaryTitle" className={styles.title} />
      <div className={styles.content}>
        <div className={styles.imgBox}>
          <Image src={card.img} width={920} height={720} />
        </div>
        <Card type="mySell" price={card.price} count={card.count}>
          {card.description}
        </Card>
      </div>
    </div>
  );
}
