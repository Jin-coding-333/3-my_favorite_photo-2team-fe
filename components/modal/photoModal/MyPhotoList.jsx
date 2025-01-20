import { useUser } from '@/contexts/UserProvider';
import { useEffect } from 'react';

export default function MyPhotoList() {
  useEffect(() => {
    const { myCards } = useUser();
    console.log(myCards);
  }, []);
  return (
    <>
      <div></div>
    </>
  );
}
