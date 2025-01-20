import { Alarm } from '@/components/meta/alarm/Alarm';
import { Profile } from '@/components/meta/profile/Profile';
import { getNotifications, markNotificationAsRead } from '@/lib/api/user/exchangeApi';
import { notificationsData } from '@/lib/data/alarmOptions';
import styles from '@/styles/layout/Header.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HeaderUserInfo({ point, nickName, logout }) {
  const [notifications, setNotifications] = useState(notificationsData); // 임시 알림 데이터로 초기화

  // 알림 데이터를 서버에서 가져오기 (실제 서버에서 데이터를 받아오는 로직)
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const result = await getNotifications(); // 실제 API 호출
        if (result.success) {
          setNotifications(result.data || []); // 응답 데이터가 `data` 필드에 있을 경우
        } else {
          console.error(result.message);
        }
      } catch (error) {
        console.error('Error fetching notifications:', error.response?.data || error.message);
      }
    };
    // fetchNotifications();
  }, []); // 처음 렌더링될 때만 호출

  // 알림 읽음 처리 핸들러
  const handleMarkAsRead = async (notificationId) => {
    try {
      const result = await markNotificationAsRead(notificationId);
      if (result.success) {
        setNotifications((prev) =>
          prev.map((notif) => (notif.id === notificationId ? { ...notif, isRead: true } : notif)),
        );
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error('Failed to mark notification as read:', error);
    }
  };
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
          <Alarm
            notifications={notifications}
            updateNotifications={setNotifications}
            onMarkAsRead={handleMarkAsRead}
          />
        </div>
        <div className={styles.userName}>
          <Profile userName={nickName} point={point} logout={logout} />
        </div>
      </div>

      <div className={styles.logoutBox} onClick={logout}>
        <h2 className={styles.logoutText}>로그아웃</h2>
      </div>
    </div>
  );
}
