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

  return (
    <div className={styles.photocardListContainer}>
      {list.map((photocard) => {
        return (
          <div key={photocard.name} className={styles.photocard}>
            <Link href={`/'market-place/photocard'/${photocard.cardId}`}>
              <PhotoCard
                key={photocard.id}
                cardType="original"
                isSoldOut={photocard.isSoldOut}
                data={photocard}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
