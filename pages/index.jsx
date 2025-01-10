import instance from '@/lib/api/instance';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    instance.get('/api/auth');
  });
  return (
    <>
      <h1>Home Page</h1>
    </>
  );
}
