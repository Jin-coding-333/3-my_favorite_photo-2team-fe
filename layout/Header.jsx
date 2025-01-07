import Image from 'next/image';
import styles from '@/styles/layout/Header.module.css';
import Link from 'next/link';
import HeaderUserInfo from '@/layout/HeaderUserInfo';
import HeaderNoneUser from '@/layout/HeaderNoneUser';
import { useAuth } from '@/contexts/AuthProvier';

export default function Header() {
  const { user, logout } = useAuth();

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

          <div
            className={styles.userAlarmMobile}
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
          {user ? <HeaderUserInfo {...user} logout={logout} /> : <HeaderNoneUser />}
        </div>
      </div>
    </header>
  );
}
