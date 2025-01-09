import { useState, useEffect, useRef } from 'react';
import styles from '@/styles/components/meta/alarm/alarm.module.css';
import Image from 'next/image';
import AlarmImg from '@/public/icon/type=alarm_default.png';
import BackImg from '@/public/icon/type=back.png';

function FormatTimeDifference(timestamp) {
  const now = new Date();
  const diff = now - new Date(timestamp);
  const diffInMinutes = Math.floor(diff / (1000 * 60));
  const diffInHours = Math.floor(diff / (1000 * 60 * 60));
  const diffInDays = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  } else if (diffInHours < 24) {
    return `${diffInHours}시간 전`;
  } else if (diffInDays < 7) {
    return `${diffInDays}일 전`;
  } else if (diffInDays < 30) {
    return `${Math.floor(diffInDays / 7)}주 전`;
  } else if (diffInDays < 365) {
    return `${Math.floor(diffInDays / 30)}개월 전`;
  } else {
    return `${Math.floor(diffInDays / 365)}년 전`;
  }
}

export function Alarm({ notifications, updateNotifications }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const unreadCount = notifications.filter((notif) => !notif.isRead).length;

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const onNotificationClick = (index) => {
    const updatedNotifications = notifications.map((notif, i) =>
      i === index ? { ...notif, isRead: true } : notif,
    );
    updateNotifications(updatedNotifications);
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
    <div className={styles.alarmWrapper} ref={dropdownRef}>
      <button className={styles.alarmButton} onClick={toggleDropdown} aria-label="알림 열기">
        <Image src={AlarmImg} alt="알람 아이콘" width={24} height={24} />
        {unreadCount > 0 && <span className={styles.badge}>{unreadCount}</span>}
      </button>
      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.mobileHeader}>
            <Image
              src={BackImg}
              alt="뒤로가기 버튼 이미지"
              className={styles.backButton}
              onClick={setIsOpen.bind(null, false)}
            />
            <p className={styles.notificationTitle}>알림</p>
          </div>
          {notifications.length > 0 ? (
            notifications.map((notif, index) => (
              <div
                key={index}
                className={`${styles.notification} ${notif.isRead ? styles.read : ''}`}
                onClick={() => onNotificationClick(index)}
              >
                <p className={styles.text}>{notif.message}</p>
                <p className={styles.time}>{FormatTimeDifference(notif.time)}</p>
              </div>
            ))
          ) : (
            <div className={styles.noNotification}>새 알림이 없습니다.</div>
          )}
        </div>
      )}
    </div>
  );
}

/*
사용할때 api가 지금 만들고 한게 없어서 테스트용으로 지금은
notificationsData를 import해서

const [notifications, setNotifications] = useState(notificationsData);

<div
  className={styles.userAlarmMobile}
  style={{
    position: 'relative',
  }}
>
  <Alarm notifications={notifications} updateNotifications={setNotifications} />
</div>

코드 작성하면 확인이 가능합니다
*/
