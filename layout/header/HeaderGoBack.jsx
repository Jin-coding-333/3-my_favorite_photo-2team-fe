import styles from '@/styles/layout/header/HeaderGoBack.module.css';
import Image from 'next/image';
import goBackImg from '/icon/type=back.png';

export default function HeaderGoBack() {
  return (
    <div className={styles.headerGoBackContainer}>
      <div className={styles.goBackImg}>
        <Image
          src={goBackImg}
          alt="Go Back Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className={styles.goBackText}>{'ㅁㄴㅇㅇ'}</h1>
    </div>
  );
}