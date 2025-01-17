import { useState } from 'react';
import styles from '@/styles/pages/SignUp.module.css';
import Link from 'next/link';
import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import CenterLayout from '@/layout/CenterLayout';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthProvier';

export default function Signup() {
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    nickName: '',
    password: '',
  });
  const [password2, setPw2] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    if (name === 'passwordChk') setPw2(value);
    else setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (formData.password === password2) signup(formData);
    else alert('비밀번호가 일치하지 않습니다.');
  };

  return (
    <CenterLayout>
      <div className={styles.SignupBox}>
        <Link href="/" className={styles.Logo}>
          <Image src="/logo/logo.svg" alt="logo" width={330} height={60} />
        </Link>

        <div className={styles.SignupInputs}>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="이메일을 입력해 주세요"
          />
          <Input
            name="nickName"
            type="nickName"
            value={formData.nickName}
            onChange={handleChange}
            placeholder="닉네임을 입력해 주세요"
          />
          <Input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="8자 이상 입력해 주세요"
          />
          <Input
            name="passwordChk"
            type="passwordChk"
            value={password2}
            onChange={handleChange}
            placeholder="비밀번호를 한번 더 입력해 주세요"
          />
        </div>

        <Button onClick={handleSubmit} type="primary" size="xxxl">
          가입하기
        </Button>
        <p className={styles.BottomText}>
          이미 최애의 포토 회원이신가요? <Link href="/login">로그인하기</Link>
        </p>
      </div>
    </CenterLayout>
  );
}
