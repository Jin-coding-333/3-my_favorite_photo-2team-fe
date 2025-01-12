import Image from 'next/image';
import styles from '@/styles/layout/Header.module.css';
import Link from 'next/link';
import HeaderUserInfo from '@/layout/header/HeaderUserInfo';
import HeaderNoneUser from '@/layout/header/HeaderNoneUser';
import { useAuth } from '@/contexts/AuthProvier';
import MenuImg from '@/public/icon/type=menu.png';
import AlarmImg from '@/public/icon/type=alarm_default.png';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Header() {
  const { user, logout, refreshToken } = useAuth();
  const { pathname } = useRouter();
  useEffect(() => {
    refreshToken();
  }, [pathname]);

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
            <Image src={MenuImg} alt="Menu logo" />
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

          {user ? (
            <div className={styles.userContainer}>
              <div className={styles.userImfoBox}>
                <h2 className={styles.userPoints}>{user.point} P</h2>
                <div
                  className={styles.userAlarmMobile}
                  style={{
                    position: 'relative',
                  }}
                >
                  <Image src={AlarmImg} alt="Alarm logo" />
                </div>
                <div className={styles.test}>
                  <Image src={MenuImg} alt="Menu logo" />
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
