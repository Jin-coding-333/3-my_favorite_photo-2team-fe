import styles from '@/styles/layout/Header.module.css';
import Image from 'next/image';

export default function HeaderUserInfo({ point, nickName, logout }) {
  return (
    <div className={styles.userContainer}>
      <div className={styles.userImfoBox}>
        <h2 className={styles.userPoints}>{point} P</h2>
        <div
          className={styles.userAlarm}
          style={{
            position: 'relative',
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
        <h2 className={styles.userName}>{nickName}</h2>
      </div>

      <div className={styles.logoutBox} onClick={logout}>
        <h2 className={styles.logoutText}>로그아웃</h2>
      </div>
    </div>
  );
}
