import styles from '@/styles/components/title/Title.module.css'
import Button from '@/button/Button.jsx'

export default function Title({
  title, 
  buttonText, 
  onButtonClick, 
  size = 'L',
  variant = 'default', 
  buttonType = 'primary',
}) {
  // 타이틀 크기에 따라 버튼 사이즈 자동 설정
  const buttonSizeMap = {
    L: 'xl',
    M: 'l',
    S: 'm',
  };
  const buttonSize = buttonSizeMap[size];

  // 폰트 설정
  // secondaryTitle: 'BR B' font
  const titleClass = 
    variant === 'default' ? styles.defaultTitle : styles.secondaryTitle;
  
  const containerClass = `${styles[`size-${size}`]}`;

  return (
    <div className={containerClass}>
      <div className={styles.titleContainer}>
      <h2 className={titleClass}>{title}</h2>
      {buttonText && (
        <Button type={buttonType} size={buttonSize} onClick={onButtonClick}>
          {buttonText}
        </Button>
      )}
      </div>
    </div>
  )
}
//사용 방법
{/* <Title
      title="마켓플레이스"
      buttonText="나의 포토카드 판매하기"
      size="L"      
      buttonType="primary"
      onButtonClick={() => alert('판매하기 버튼이 클릭됨')}
      variant="secondaryTitle"
      /> */}
