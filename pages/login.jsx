import Button from '@/components/button/Button';
import { useAuth } from '@/contexts/AuthProvier';
import CenterLayout from '@/layout/CenterLayout';
import styles from '@/styles/pages/Login.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Input from '@/components/input/Input';

export default function Login() {
  const router = useRouter();
  const { login, user, isPending } = useAuth();
  const [loginBody, setLoginBody] = useState({ email: '', password: '' });
  function changeHandle(e) {
    const { name, value } = e.target;
    setLoginBody({ ...loginBody, [name]: value });
  }
  async function loginHandle() {
    await login(loginBody);
  }
  useEffect(() => {
    if (!!user) {
      router.push('/');
    }
  }, [user]);

  if (!!user) return null;

  return (
    <CenterLayout>
      <div className={styles.LoginBox}>
        <Link href="/" className={styles.Logo}>
          <Image src="/logo/logo.svg" alt="logo" width={330} height={60} />
        </Link>

        <div className={styles.LoginInputs}>
          <Input name="email" type="email" value={loginBody.email} onChange={changeHandle} />
          <Input
            name="password"
            type="password"
            value={loginBody.password}
            onChange={changeHandle}
          />
        </div>
        <Button onClick={loginHandle} type="primary" size="xxxl">
          로그인
        </Button>
        <p className={styles.BottomText}>
          최애의 포토가 처음이신가요? <Link href="/signup">회원가입하기</Link>
        </p>
      </div>
    </CenterLayout>
  );
}
