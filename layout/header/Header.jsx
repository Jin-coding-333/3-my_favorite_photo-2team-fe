import Image from 'next/image';
import styles from '@/styles/layout/Header.module.css';
import Link from 'next/link';
import HeaderUserInfo from '@/layout/header/HeaderUserInfo';
import HeaderNoneUser from '@/layout/header/HeaderNoneUser';
import { useAuth } from '@/contexts/AuthProvier';
import { notificationsData } from '@/lib/data/alarmOptions';
import { useEffect, useState } from 'react';
import { Alarm } from '@/components/meta/alarm/alarm';
import { Profile } from '@/components/meta/profile/profile';

function fetchUserData() {
  return {
    userName: '유디',
    point: '1,520',
    isAuthenticated: true,
  };
}

export default function Header() {
  const { user, logout } = useAuth();
  const [userData, setUserData] = useState({});
  const [notifications, setNotifications] = useState(notificationsData);

  useEffect(() => {
    const result = fetchUserData();
    setUserData(result);
  }, []);

  return (
    <header>
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <div
            className={styles.headerMenu}
            style={{
              position: 'relative',
            }}
          >
            <Profile userName={userData.userName} point={userData.point} />
          </div>

          <Link href="/">
            <div
              className={styles.headerLogo}
              style={{
                position: 'relative',
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

          {userData.isAuthenticated ? (
            <div className={styles.userContainer}>
              <div className={styles.userImfoBox}>
                <h2 className={styles.userPoints}>{userData.point} P</h2>
                <div
                  className={styles.userAlarmMobile}
                  style={{
                    position: 'relative',
                  }}
                >
                  <Alarm notifications={notifications} updateNotifications={setNotifications} />
                </div>
                <div className={styles.test}>
                  <Profile userName={userData.userName} point={userData.point} />
                </div>
              </div>
              <div className={styles.logoutBox} onClick={logout}>
                <h2 className={styles.logoutText}>로그아웃</h2>
              </div>
            </div>
          ) : (
            <div className={styles.noneUserContainer}>
              <Link href="/login">
                <h2 className={styles.noneUserText}>로그인</h2>
              </Link>
              <Link href="/sign-up">
                <h2 className={styles.noneUserText}>회원가입</h2>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
