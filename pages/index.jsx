import styles from '@/styles/pages/index/HomePage.module.css';
import ImageSlider from '@/components/pages/index/ImageSlider';
import Button from '@/components/button/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containBox}>
          <div className={styles.logoBox}>
            <Link href="/">
              <Image
                src="/logo/logo.svg"
                alt="logo"
                width={630}
                height={200}
                className={styles.logo}
              />
            </Link>
          </div>
          <div className={styles.titleBox}>
            <h1 className={styles.title1}>
              디지털 컬렉션의 시작
              <span className={styles.mainColor}>!</span>
            </h1>
            <h1 className={styles.title2}>
              내 손 안의 <span className={styles.mainColor}>포토카드</span>
            </h1>
            <Link href="/market-place">
              <Button type="primary" className={styles.button} size="xl">
                포토 카드 보러가기
              </Button>
            </Link>
          </div>
        </div>
        <ImageSlider />
      </div>
    </>
  );
}
