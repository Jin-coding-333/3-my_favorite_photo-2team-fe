import styles from '@/styles/components/title/Title.module.css'
import Button from '../button/button'

export default function Title({
  title, buttonText, onButtonClick, variant = 'default', buttonType="primary",
}) {
  //폰트 설정
  const titleClass = variant === 'default' ? styles.defaultTitle : styles.secondaryTitle;
  
  return (
      <div className={styles.titleContainer}>
      <h2 className={titleClass}>{title}</h2>
      {buttonText && (
        <Button type={buttonType} size='l' onClick={onButtonClick}>
          {buttonText}
        </Button>
      )}
    </div>
    
  )
}
//사용 방법
{/* <Title
  title="마켓플레이스"
  buttonText="내 포토카드 판매하기"
  onButtonClick={() => alert('판매하기 버튼이 클릭됨')}
  /> */}
