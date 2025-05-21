import Card from '@/components/card/Card';
import Title from '@/components/title/Title';
import styles from '@/styles/pages/my-gallery/Detail.module.css';
import Image from 'next/image';

const card = {
  name: '카드이름',
  grade: 'COMMON',
  genre: 'unknwon',
  userName: '유저이름',
  description: '설명',
  img: '/img/404.svg',
  price: 4,
  totalCount: 3,
};
export default function MyPhotocard({}) {
  return (
    <div className={styles.detail}>
      <Title
        size="M"
        title={card.name}
        variant="secondaryTitle"
        className={styles.title}
      />
      <div className={styles.content}>
        <div className={styles.imgBox}>
          <Image src={card.img} layout="fill" />
        </div>
        <Card
          type="mySell"
          userNickName={card.userName}
          genre={card.genre}
          grade={card.grade}
          price={card.price}
          totalCount={card.totalCount}
        >
          {card.description}
        </Card>
      </div>
    </div>
  );
}
