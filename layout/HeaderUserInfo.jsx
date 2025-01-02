import styles from '@/styles/layout/Header.module.css';
import Image from 'next/image';

export default function HeaderUserInfo() {

  return (
    <div className={styles.userContainer}>
      <div className={styles.userImfoBox}>
        <h2 className={styles.userPoints}>{'1,540'} P</h2>
        <div
          className={styles.userAlarm}
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
        <h2 className={styles.userName}>유디</h2>
      </div>

      <div className={styles.logoutBox}>
        <h2 className={styles.logoutText}>로그아웃</h2>
      </div>
    </div>
  );
}