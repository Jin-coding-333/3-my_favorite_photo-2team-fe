import { useState, useEffect } from 'react';
import { getTotalCards } from '@/lib/api/cards/cardsApi';

export default function usePhotocardList() {
  const [photocardList, setPhotocardList] = useState([]);

  useEffect(() => {
    const fetchPhotocardList = async () => {
      const response = await getTotalCards();
      setPhotocardList( response);
    };

    fetchPhotocardList();
  }, []);

  return photocardList;
}