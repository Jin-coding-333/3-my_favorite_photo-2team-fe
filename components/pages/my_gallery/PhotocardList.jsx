import PhotoCard from "@/components/card/photoCard/PhotoCard";
import styles from "@/styles/components/pages/market-place/PhotocardList.module.css";
import Link from "next/link";
import usePhotocardList from '@/lib/hooks/usePhotocardList';
import photocards from '@/lib/data/cardsData';

export default function PhotocardList() {
  const photocardList = usePhotocardList();

  // 데이터가 없을 때의 처리
  if (!photocards || photocards.length === 0) {
    return <div className={styles.photocardListContainer}>포토카드가 없습니다.</div>;
  }

  return (
    <div className={styles.photocardListContainer}>
      {photocards.map((photocard) => (
        <div key={photocard.id} className={styles.photocard}>
          <Link href={`/my-gallery/my-photocard/${photocard.id}`}>
            <PhotoCard
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
