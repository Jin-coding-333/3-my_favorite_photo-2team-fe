import PhotoCard from "@/components/card/photoCard/PhotoCard";
import styles from "@/styles/components/pages/market-place/PhotocardList.module.css";
import Link from "next/link";
// import photocards from '@/lib/data/cardsData';

export default function PhotocardList({ photocardList }) {

  return (
    <div className={styles.photocardListContainer}>
      {photocardList.map((photocard) => (
        <div className={styles.photocard}>
          <Link href={`/'market-place/photocard'/${photocard.cardId}`}>
            <PhotoCard
              key={photocard.id}
              cardType='original'
              isSoldOut={photocard.isSoldOut}
              data={photocard}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
