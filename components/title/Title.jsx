import styles from '@/styles/components/title/Title.module.css';
import Button from '@/components/button/Button.jsx';
import { useState, useEffect } from 'react';

export default function Title({
  title,
  buttonText,
  onButtonClick,
  size = 'L',
  variant = 'default',
  buttonType = 'primary',
  className,
  btnClassName,
}) {
  // 타이틀 크기에 따라 버튼 사이즈 자동 설정
  const buttonSizeMap = {
    L: 'xl',
    M: 'l',
    S: 'm',
  };
  const [buttonSize, setButtonSize] = useState(buttonSizeMap[size]);

  // 미디어쿼리 1200px일 때, 버튼 크기 'm'으로 변경
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1200px)');
    const handleMediaChange = (e) => {
      setButtonSize(e.matches ? 'm' : buttonSizeMap[size]);
    };

    handleMediaChange(mediaQuery);
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, [size]);

  // 폰트 설정
  // secondaryTitle: 'BR B' font
  const titleClass = variant === 'default' ? styles.defaultTitle : styles.secondaryTitle;

  const containerClass = `${styles[`size-${size}`]}`;

  return (
    <div className={`${containerClass} ${className}`}>
      <div className={styles.titleContainer}>
        <h2 className={titleClass}>{title}</h2>
        {buttonText && (
          <Button
            className={btnClassName}
            type={buttonType}
            size={buttonSize}
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
}
//사용 방법
{
  /* <Title
      title="마켓플레이스"
      buttonText="나의 포토카드 판매하기"
      size="L"      
      buttonType="primary"
      onButtonClick={() => alert('판매하기 버튼이 클릭됨')}
      variant="secondaryTitle"
      /> */
}
