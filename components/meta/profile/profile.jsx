import { useState, useEffect, useRef } from 'react';
import styles from '@/styles/components/meta/profile/profile.module.css';

export function Profile({ userName, point }) {
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
            <div className={styles.logout}>로그아웃</div>
          </div>
        </div>
      )}
    </div>
  );
}
