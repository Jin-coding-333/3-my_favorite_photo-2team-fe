import instance from '../instance';

export default async function loginApi(body) {
  try {
    const response = await instance.post('/auth/login', body);
    return response.data;
  } catch (err) {
    console.log('loginApi', err);
  }
}
