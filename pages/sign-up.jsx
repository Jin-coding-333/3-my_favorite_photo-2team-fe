import { useState } from 'react';
import styles from '@/styles/pages/SignUp.module.css';
import Link from 'next/link';
import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import CenterLayout from '@/layout/CenterLayout';
import Image from 'next/image';

export default function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    nickname: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    nickname: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      email: '',
      nickname: '',
      password: '',
      confirmPassword: '',
    };

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '유효한 이메일을 입력하세요.';
      isValid = false;
    }
    if (!formData.nickname) {
      newErrors.nickname = '닉네임을 입력하세요.';
      isValid = false;
    }
    if (formData.password.length < 8) {
      newErrors.password = '비밀번호는 최소 8자리 이상이어야 합니다.';
      isValid = false;
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = '비밀번호가 일치하지 않습니다.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      // 서버로 회원가입 요청 로직 추가 가능
      console.log('회원가입 데이터:', formData);
      alert('회원가입 성공!');
      setFormData({ email: '', nickname: '', password: '', confirmPassword: '' });
      setErrors({ email: '', nickname: '', password: '', confirmPassword: '' });
    }
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
          name="nickname"
          type="nickName"
          value={formData.nickname}
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
          name="confirmPassword"
          type="passwordChk"
          value={formData.confirmPassword}
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
