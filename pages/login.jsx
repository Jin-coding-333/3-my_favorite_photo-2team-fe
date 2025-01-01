import Input from '@/components/input/inputCommon'; // 컴포넌트 경로 확인
import { useState } from 'react';

export default function Login() {
  const [Email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      {/* Input 컴포넌트를 사용하여 label과 placeholder를 렌더링 */}
      <Input
        label="이메일"
        placeholder="이메일을 입력해주세요"
        value={Email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* <h1>Login</h1> */}
    </>
  );
}
