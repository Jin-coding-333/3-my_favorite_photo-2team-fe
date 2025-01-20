import axios from "axios";

const getTotalCards = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/shop/cards');
    console.log('test999', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export { getTotalCards };
