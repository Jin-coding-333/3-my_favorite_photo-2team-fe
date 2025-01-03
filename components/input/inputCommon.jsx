import { useState } from 'react';
import '@/styles/components/input/input.css';

export default function Input({
  label,
  placeHolder,
  value,
  onChange,
  type = 'text',
  inputClassName = '',
}) {
  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleValidation = (e) => {
    const inputValue = e.target.value;
    onChange(e);

    if (type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(inputValue)) {
        setErrorMessage('이메일 형식이 아닙니다.');
        setShowError(true);
      } else {
        setErrorMessage('');
        setShowError(false);
      }
    }

    if (type === 'photoName' && inputValue.length > 30) {
      setErrorMessage('포토카드 이름은 최대 30자를 초과할 수 없습니다.');
      setShowError(true);
    } else if (type === 'photoName') {
      setErrorMessage('');
      setShowError(false);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const defaultLabels = {
    email: '이메일',
    password: '비밀번호',
    passwordChk: '비밀번호 확인',
    photoName: '포토카드 이름',
    price: '가격',
    quantity: '총 발행량',
    nickName: '닉네임',
  };

  const defaultPlaceholders = {
    email: '이메일을 입력해주세요',
    password: '비밀번호를 입력해주세요',
    passwordChk: '비밀번호를 한번 더 입력해주세요',
    photoName: '포토카드 이름을 입력해 주세요',
    price: '가격을 입력해 주세요',
    quantity: '총 발행량을 입력해 주세요',
    nickName: '닉네임을 입력해 주세요',
  };

  const getDefaultLabel = () => defaultLabels[type] || label;
  const getDefaultPlaceholder = () => defaultPlaceholders[type] || placeHolder;

  return (
    <div className="wrapper">
      <span className="label">{getDefaultLabel()}</span>
      <div className="input-container">
        <input
          className={`styled-input ${inputClassName}`}
          value={value}
          onChange={handleValidation}
          placeholder={getDefaultPlaceholder()}
          type={['password', 'passwordChk'].includes(type) && isPasswordVisible ? 'text' : type}
        />
        {['password', 'passwordChk'].includes(type) && (
          <img
            src={isPasswordVisible ? '/icon/type=visible.png' : '/icon/type=invisible.png'}
            alt="toggle visibility"
            className="visibility-icon"
            onClick={togglePasswordVisibility}
          />
        )}
      </div>
      <p className="error-message" style={{ display: showError ? 'block' : 'none' }}>
        {errorMessage}
      </p>
    </div>
  );
}
