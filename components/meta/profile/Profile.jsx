import { useState, useEffect, useRef } from 'react';
import styles from '@/styles/components/meta/profile/Profile.module.css';
import MenuImg from '@/public/icon/type=menu.png';
import Image from 'next/image';

export function Profile({ userName, point, logout }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className={styles.profileWrapper} ref={dropdownRef}>
      <p className={styles.userName} onClick={toggleDropdown}>
        {userName}
      </p>
      <Image
        src={MenuImg}
        alt="Menu Icon"
        className={styles.menuIcon}
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div className={styles.profileDropdown}>
          <div className={styles.profileHeader}>
            <p className={styles.greeting}>안녕하세요, {userName}님!</p>
            <div className={styles.pointLayer}>
              <p className={styles.pointLabel}>보유 포인트</p>
              <p className={styles.pointValue}>{point} P</p>
            </div>
          </div>
          <div className={styles.divider} />
          <div className={styles.profileMenu}>
            <div className={styles.menuItem}>마이갤러리</div>
            <div className={styles.menuItem}>나의 판매 포토카드</div>
            <div className={styles.logout} onClick={logout}>
              로그아웃
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/*
api로 유저 정보를 받아오는 단계가 아직 없어서 가상으로 함수를 작성하고 useState와 useEffect를 사용

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

가상으로 받아온 데이터를 props로 연결하면 됩니다

{user ? (
대신에
{userData.isAuthenticated ? (
입력해서 확인함

<div
  className={styles.headerMenu}
  style={{
    position: 'relative',
  }}
>
  <Profile userName={userData.userName} point={userData.point} />
</div>

<div className={styles.test}>
  <Profile userName={userData.userName} point={userData.point} />
</div>
*/
