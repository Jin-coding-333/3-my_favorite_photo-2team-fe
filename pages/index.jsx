import TradeModal from '@/components/modal/TradeModal';
import { useEffect } from 'react';
import { useUser } from '@/contexts/UserProvider';
import PointModal from '@/components/modal/PointModal';
import { useAuth } from '@/contexts/AuthProvier';
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();
  useEffect(() => {}, []);

  return (
    <>
      {/* <TradeModal></TradeModal> */}
      <h1>Home Page</h1>
    </>
  );
}
