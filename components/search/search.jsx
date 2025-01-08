import styles from '@/styles/components/search/search.module.css';
import searchImg from '@/public/icon/type=search.png';
import Image from 'next/image';

export function Search() {
  return (
    <div className={styles.search}>
      <div className={styles.searchWrapper}>
        <Image src={searchImg} alt="돋보기 이미지" className={styles.searchIcon} />
        <input className={styles.input} type="text" placeholder="검색" />
      </div>
    </div>
  );
}
