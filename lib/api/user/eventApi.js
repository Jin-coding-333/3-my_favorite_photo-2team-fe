import instance from '../instance';

export async function pointEventApi(body) {
  try {
    const response = await instance.post('/api/user/point', body);
    return response.data;
  } catch (err) {
    return false;
  }
}

export async function eventChk() {
  try {
    const response = await instance.get('/api/user/point');
    return response.data;
  } catch (err) {
    return false;
  }
}
