import instance from '../instance';

export const getTotalCards = async () => {
  try {
    const response = await instance.get('/api/shop/cards');
    return await response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
