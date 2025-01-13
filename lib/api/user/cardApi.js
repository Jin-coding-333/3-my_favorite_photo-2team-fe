import instance from '../instance';

export async function getCards() {
  try {
    const response = await instance.get('/api/user/my-cards');
    return await response.data;
  } catch (err) {
    console.log('getCards', err);
  }
}

export async function createCards(body) {
  try {
    const response = await instance.post('/api/user/my-cards', body);
    return await response.data;
  } catch (err) {
    console.log('createCards', err);
    return false;
  }
}
