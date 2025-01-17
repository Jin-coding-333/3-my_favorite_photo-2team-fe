import instance from '../instance';

export async function getCards() {
  try {
    const response = await instance.get('/api/user/my-cards');
    return await response.data;
  } catch (err) {
    return false;
  }
}

export async function createCards(body) {
  try {
    const formData = new FormData();
    for (const key in body) {
      formData.append(key, body[key]);
    }

    const path = '/api/user/my-cards';
    const response = await instance.post(path, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return await response.data;
  } catch (err) {
    return false;
  }
}
