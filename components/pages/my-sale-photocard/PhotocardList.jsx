import PhotoCard from '@/components/card/photoCard/PhotoCard';
import styles from '@/styles/components/pages/market-place/PhotocardList.module.css';
import Link from 'next/link';
import usePhotocardList from '@/lib/hooks/usePhotocardList';
import photocards from '@/lib/data/cardsData';

export default function PhotocardList() {
  const photocardList = usePhotocardList();

  console.log('photocardList', photocardList);

  return (
    <div className={styles.photocardListContainer}>
      {photocards.map((photocard) => (
        <div className={styles.photocard}>
          <Link href={`/'market-place/photocard'/${photocard.id}`}>
            <PhotoCard
              key={photocard.id}
              cardType="forSale"
              isSoldOut={photocard.isSoldOut}
              data={photocard}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
