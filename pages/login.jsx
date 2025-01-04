import Button from '@/components/button/Button';
import CenterLayout from '@/layout/CenterLayout';
import styles from '@/styles/pages/Login.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
  return (
    <CenterLayout>
      <div className={styles.LoginBox}>
        <Link href="/" className={styles.Logo}>
          <Image src="/logo/logo.svg" alt="logo" width={330} height={60} />
        </Link>

        <div className={styles.LoginInputs}>
          <input type="text" placeholder="email" /> <br />
          <input type="password" placeholder="password" />
        </div>
        <Button type="primary" size="xxxl">
          로그인
        </Button>
        <p className={styles.BottomText}>
          최애의 포토가 처음이신가요? <Link href="/signup">회원가입하기</Link>
        </p>
      </div>
    </CenterLayout>
  );
}
