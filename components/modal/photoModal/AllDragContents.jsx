import Title from '@/components/title/Title';
import PhotoCard from '@/components/card/photoCard/PhotoCard';
import styles from '@/styles/components/modal/photoModal/AllDragContents.module.css';
export default function AllDragContents() {
  return (
    <div className={styles.mainContents}>
      <div className={styles.pagename}>마이갤러리</div>
      <div className={styles.topBanner}>
        <Title title="나의 포토카드 판매하기" size="M" variant="secondaryTitle" />
        <div className={styles.inputBox}>
          <div className={styles.search}>
            <input />
          </div>
          <div className={styles.dropdownGrade}>등급 </div>
          <div className={styles.dropdownGenre}>장르 </div>
        </div>
      </div>
      <div className={styles.holdingPhotoBox}>
        {/* 여기는 list로 바꿔야 할 듯 */}
        <PhotoCard cardType="myCard" />
        <PhotoCard cardType="myCard" />
        <PhotoCard cardType="myCard" />
        <PhotoCard cardType="myCard" />
        <PhotoCard cardType="myCard" />
        <PhotoCard cardType="myCard" />
      </div>
    </div>
  );
}
