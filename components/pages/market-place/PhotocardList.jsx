import PhotoCard from "@/components/card/photoCard/PhotoCard";
import styles from "@/styles/components/pages/market-place/PhotocardList.module.css";
import Link from "next/link";

export default function PhotocardList() {
  const photocards = [
    {
      id: 1,
      title: "포토카드 1",
      imageUrl: "/images/photocard1.jpg",
      isSoldOut: false,
    },
    {
      id: 2,
      title: "포토카드 2",
      imageUrl: "/images/photocard2.jpg",
      isSoldOut: true,
    },
    {
      id: 3,
      title: "포토카드 3",
      imageUrl: "/images/photocard3.jpg",
      isSoldOut: false,
    },
    {
      id: 4,
      title: "포토카드 4",
      imageUrl: "/images/photocard4.jpg",
      isSoldOut: true,
    },
    {
      id: 5,
      title: "포토카드 5",
      imageUrl: "/images/photocard5.jpg",
      isSoldOut: false,
    },
    {
      id: 6,
      title: "포토카드 6",
      imageUrl: "/images/photocard6.jpg",
      isSoldOut: true,
    },
    {
      id: 7,
      title: "포토카드 7",
      imageUrl: "/images/photocard7.jpg",
      isSoldOut: false,
    },
    {
      id: 8,
      title: "포토카드 8",
      imageUrl: "/images/photocard8.jpg",
      isSoldOut: true,
    },
    {
      id: 9,
      title: "포토카드 9",
      imageUrl: "/images/photocard9.jpg",
      isSoldOut: false,
    },
    {
      id: 10,
      title: "포토카드 10",
      imageUrl: "/images/photocard10.jpg",
      isSoldOut: true,
    },
    {
      id: 11,
      title: "포토카드 11",
      imageUrl: "/images/photocard11.jpg",
      isSoldOut: false,
    },
    {
      id: 12,
      title: "포토카드 12",
      imageUrl: "/images/photocard12.jpg",
      isSoldOut: true,
    },
    {
      id: 13,
      title: "포토카드 13",
      imageUrl: "/images/photocard13.jpg",
      isSoldOut: false,
    },
  ];

  return (
    <div className={styles.photocardListContainer}>
      {photocards.map((photocard) => (
        <div className={styles.photocard}>
          <Link href={`/market-place/photocard/${photocard.id}`}>
            <PhotoCard
              key={photocard.id}
              cardType="original"
              isSoldOut={photocard.isSoldOut}
              data={photocard}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}