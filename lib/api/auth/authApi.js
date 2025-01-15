import instance from '../instance';

export async function signupApi(body) {
  try {
    const response = await instance.post('/api/auth/signup', body);
    return await response.data;
  } catch (err) {
    return await err.response.data;
  }
}

export async function loginApi(body) {
  try {
    const response = await instance.post('/api/auth/login', body);
    return await response.data;
  } catch (err) {
    console.log('loginApi', err);
  }
}

export async function getUser() {
  try {
    const response = await instance.get('/api/auth/user');
    return await response.data;
  } catch (err) {
    console.log('getUser', err);
  }
}

export async function logoutApi() {
  try {
    const response = await instance.get('/api/auth/logout');
    return await response.data;
  } catch (err) {
    console.log('logoutApi', err);
  }
}

export async function refresh() {
  try {
    const response = await instance.post('/api/auth/refresh');
    return await response.data;
  } catch (err) {
    console.log('refresh', 'not');
  }
}
