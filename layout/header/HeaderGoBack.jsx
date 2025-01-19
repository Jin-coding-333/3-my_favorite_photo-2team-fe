import styles from '@/styles/layout/Header.module.css';
import Image from 'next/image';

export default function HeaderGoBack({ currentUrl }) {
  let title = '';

  if (/^\/market-place\/photocard\/\d+$/.test(currentUrl)) {
    title = '마켓플레이스';
  }

  if (currentUrl === '/my-gallery') {
    title = '마이갤러리';
  }

  if (/^\/my-gallery\/my-photocard\/\d+$/.test(currentUrl)) {
    title = '';
  }

  if (currentUrl === '/my-sale-photocard') {
    title = '나의 판매 포토카드';
  }

  return (
    <div className={styles.headerGoBackContainer}>
      <div
        className={styles.goBackImg}
        style={{
          position: 'relative',
        }}
      >
        <Image
          src='/icon/type=back.png'
          alt="Go Back Image"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <h1 className={styles.goBackText}>{title}</h1>
      <div style={{ width: '20px' }}></div>
    </div>
  );
}