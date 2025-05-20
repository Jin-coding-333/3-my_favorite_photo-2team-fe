import PhotoCard from '@/components/card/photoCard/PhotoCard';
import styles from '@/styles/components/pages/market-place/PhotocardList.module.css';
import Link from 'next/link';
import { getTotalCards } from '@/lib/api/cards/cardsApi';
import { useEffect, useState } from 'react';

export default function PhotocardList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    getTotalCards().then((res) => {
      setList(res);
    });
  }, []);

  // 데이터가 없을 때의 처리
  if (!list || list.length === 0) {
    return <div className={styles.photocardListContainer}>포토카드가 없습니다.</div>;
  }

  return (
    <div className={styles.photocardListContainer}>
      {list.map((photocard) => {
        return (
          <div key={photocard.id} className={styles.photocard}>
            <Link href={`/market-place/photocard/${photocard.id}`}>
              <PhotoCard
                key={photocard.id}
                cardType="original"
                data={{
                  card: {
                    imagePath: photocard.imagePath,
                    grade: photocard.grade,
                    genre: photocard.genre
                  },
                  name: photocard.name,
                  price: photocard.price,
                  totalQuantity: 1,
                  remainingQuantity: 1,
                  user: photocard.user
                }}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
