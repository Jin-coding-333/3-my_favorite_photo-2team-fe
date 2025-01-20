import styles from '@/styles/components/photoCard/PhotoCardBuyer.module.css';
import Link from 'next/link';


export default function PhotocardDetailPageLayout({ children }) {
  return (
    <div className={styles.photocardDetailContainer}>
      <div className={styles.photocardDetailBox}>
        <div className={styles.goBackButton}>
          <Link href="/market-place">
            마켓플레이스
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}