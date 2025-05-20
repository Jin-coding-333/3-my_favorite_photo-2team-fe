import PhotoCard from "@/components/card/photoCard/PhotoCard";
import styles from "@/styles/components/pages/market-place/PhotocardList.module.css";
import Link from "next/link";
import usePhotocardList from '@/lib/hooks/usePhotocardList';

export default function PhotocardList() {
  const photocardList = usePhotocardList();

  // 데이터가 없을 때의 처리
  if (!photocardList || photocardList.length === 0) {
    return <div className={styles.photocardListContainer}>포토카드가 없습니다.</div>;
  }

  return (
    <div className={styles.photocardListContainer}>
      {photocardList.map((photocard) => (
        <div key={photocard.id} className={styles.photocard}>
          <Link href={`/my-gallery/my-photocard/${photocard.id}`}>
            <PhotoCard
              cardType='original'
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
      ))}
    </div>
  );
}
