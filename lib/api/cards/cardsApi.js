import axios from "axios";

const getTotalCards = async () => {
  try {
    const response = await axios.get('https://my-favorite-photo.onrender.com/api/shop/cards');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export { getTotalCards };
