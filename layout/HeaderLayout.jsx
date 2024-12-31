import Image from 'next/image';
import styles from '@/styles/layout/Header.module.css';
import Link from 'next/link';
import HeaderUserInfo from '@/layout/HeaderUserInfo';

export default function HeaderLayout() {
  
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.headerContainer}>

          <div
            className={styles.headerMenu}
            style={{
              position: "relative",
            }}
          >
            <Image
              src="/icon/type=menu.png"
              alt="Homepage logo"
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </div>

          <Link href="/">
            <div
              className={styles.headerLogo}
              style={{
                position: "relative",
              }}
            >
              <Image
                src="/logo/logo.png"
                alt="Homepage logo"
                fill
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          </Link>

          <div
            className={styles.userAlarmMobile}
            style={{
              position: "relative",
            }}
          >
            <Image
              src="/icon/type=alarm_default.png"
              alt="alarm icon"
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </div>

          {/* <div className={styles.noneUserContainer}>
            <Link href="/login">
              <h2 className={styles.noneUserText}>로그인</h2>
            </Link>

            <Link href="/sign-up">
              <h2 className={styles.noneUserText}>회원가입</h2>
            </Link>
          </div> */}
          <HeaderUserInfo />
        </div>
      </div>
    </header>
  );
}