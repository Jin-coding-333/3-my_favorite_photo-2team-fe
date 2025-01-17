import TradeModal from '@/components/modal/TradeModal';
import { useEffect } from 'react';
import { useUser } from '@/contexts/UserProvider';
import PointModal from '@/components/modal/PointModal';
import { useAuth } from '@/contexts/AuthProvier';

export default function HomePage() {
  useEffect(() => {}, []);

  return (
    <>
      {/* <TradeModal></TradeModal> */}
      <h1>Home Page</h1>
    </>
  );
}
