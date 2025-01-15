import TradeModal from '@/components/modal/TradeModal';
import { useEffect } from 'react';
import { useUser } from '@/contexts/UserProvider';

export default function HomePage() {
  const { cards } = useUser();
  useEffect(() => {
    console.log(cards);
  }, []);

  return (
    <>
      {/* <TradeModal></TradeModal> */}
      <h1>Home Page</h1>
    </>
  );
}
