import { useState, useEffect } from 'react';
import { getTotalCards } from '@/lib/api/cards/cardsApi';

export default function usePhotocardList() {
  const [photocardList, setPhotocardList] = useState([]);

  const fetchPhotocardList = async () => {
    const response = await getTotalCards();
    setPhotocardList( response);
  };
  
  useEffect(() => {
    fetchPhotocardList();
  }, []);

  return photocardList;
}