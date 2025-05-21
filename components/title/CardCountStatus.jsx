import styles from '@/styles/components/title/CardCountStatus.module.css';

export default function CardCountStatus({ page = '' }) {
  let title = '';

  switch (page) {
    case 'mySalePhotocard':
      title = '판매 중인';
      break;
    case 'myGallery':
      title = '보유한';
      break;
  }

  return (
    <div className={styles.containerBox}>
      <div className={styles.titleBox}>
        <h2 className={styles.title}>
          {'USER'}님이 {title} 포토카드{' '}
        </h2>
        <span className={styles.curentNumber}>({'00'}장)</span>
      </div>
      <div className={styles.currentGradeContainerBox}>
        <div className={`${styles.gradeBox} ${styles.gradeCommon}`}>
          <span className={styles.textGrade}>COMMON</span> {'00'}장
        </div>
        <div className={`${styles.gradeBox} ${styles.gradeRare}`}>
          <span className={styles.textGrade}>RARE</span> {'00'}장
        </div>
        <div className={`${styles.gradeBox} ${styles.gradeSuperRare}`}>
          <span className={styles.textGrade}>SUPER RARE</span> {'00'}장
        </div>
        <div className={`${styles.gradeBox} ${styles.gradeLegendary}`}>
          <span className={styles.textGrade}>LEGENDARY</span> {'00'}장
        </div>
      </div>
    </div>
  );
}
