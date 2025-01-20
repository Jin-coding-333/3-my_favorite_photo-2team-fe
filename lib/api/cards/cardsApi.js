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

export const getPhotocardDetail = async (id) => {
  try {
    const response = await instance.get(`/api/shop/cards/${id}`);
    console.log("cardDetail",response.data);
    return await response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
