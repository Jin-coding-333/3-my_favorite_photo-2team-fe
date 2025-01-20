import instance from '../instance';

// 포토카드 교환 제안 생성
export async function createExchange(shopId, cardId, targetCard) {
  try {
    const response = await instance.post(`/api/exchange/cards/${shopId}/exchange`, {
      cardId,
      targetCard,
    });
    return response.data;
  } catch (err) {
    console.error('교환 제안 생성 실패:', err);
    return { success: false, message: err.message || '교환 제안 생성 실패' };
  }
}

// 포토카드 교환 제안 승인/거절
export async function updateExchange(exchangeId, action) {
  try {
    const response = await instance.post(`/api/exchange/cards/${exchangeId}/exchange/${action}`);
    return response.data;
  } catch (err) {
    console.error('교환 상태 변경 실패:', err);
    return { success: false, message: err.message || '교환 상태 변경 실패' };
  }
}

// 포토카드 교환 제안 취소
export async function deleteExchange(exchangeId) {
  try {
    const response = await instance.delete(`/api/exchange/cards/${exchangeId}/exchange`);
    return response.data;
  } catch (err) {
    console.error('교환 제안 취소 실패:', err);
    return { success: false, message: err.message || '교환 제안 취소 실패' };
  }
}

// 알림 조회
export async function getNotifications() {
  try {
    const response = await instance.get('/notifications');
    return response.data;
  } catch (err) {
    console.error('알림 조회 실패:', err);
    return { success: false, message: err.message || '알림 조회 실패' };
  }
}

// 알림 읽음 처리
export async function markNotificationAsRead(notificationId) {
  try {
    const response = await instance.patch(`/api/notifications/${notificationId}`);
    return response.data;
  } catch (err) {
    console.error('알림 수정 실패:', err);
    return { success: false, message: err.message || '알림 수정 실패' };
  }
}
