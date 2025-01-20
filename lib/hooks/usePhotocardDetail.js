import { useState, useEffect } from 'react';
import { getPhotocardDetail } from '@/lib/api/cards/cardsApi';

export default function usePhotocardDetail(id) {
  const [photocardDetail, setPhotocardDetail] = useState([]);

  const fetchPhotocardList = async () => {
    const response = await getPhotocardDetail(id);
    setPhotocardDetail(response);
  };

  useEffect(() => {
    fetchPhotocardList();
  }, []);

  return photocardDetail;
}