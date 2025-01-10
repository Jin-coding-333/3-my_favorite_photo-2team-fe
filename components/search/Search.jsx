import styles from '@/styles/components/search/Search.module.css';
import searchImg from '@/public/icon/type=search.png';
import Image from 'next/image';

export function Search({ type }) {
  return (
    <div className={styles[`${type}Search`]}>
      <div className={styles[`${type}SearchWrapper`]}>
        <Image src={searchImg} alt="돋보기 이미지" className={styles[`${type}SearchIcon`]} />
        <input className={styles[`${type}Input`]} type="text" placeholder="검색" />
      </div>
    </div>
  );
}

/*
<Search type="base" />
또는
<Search type="marketplace" />
하면 css가 변형이 될 겁니다
*/
