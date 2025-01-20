import axios from 'axios';
import instance from '../instance';

export const getTotalCards = async () => {
  try {
    // const response = await axios.get('https://my-favorite-photo.onrender.com/api/shop/cards');
    const response = await instance.get('/api/shop/cards');
    return await response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
