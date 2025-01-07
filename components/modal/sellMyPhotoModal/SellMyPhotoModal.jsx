import styles from '@/styles/components/modal/SellMyPhotoModal.module.css';
import PhotoCard from '@/components/card/photoCard/PhotoCard';

export default function SellMyPhotoModal({ isModal, handleModal }) {
  return (
    <div>
      {isModal ? (
        <div className={styles.modalBackground}>
          <div className={styles.modalContents}>
            <button type="button" className={styles.xBt} onClick={handleModal}>
              X
            </button>
            <div className={styles.pagename}>마이갤러리</div>
            <div className={styles.title}>나의 포토카드 판매하기</div>
            <div className={styles.search}>검색창</div>
            <div className={styles.dropdownGrade}>등급 </div>
            <div className={styles.dropdownGenre}>장르 </div>
            <div className={styles.holdingPhotoBox}>
              <PhotoCard cardType="myCard" />
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
