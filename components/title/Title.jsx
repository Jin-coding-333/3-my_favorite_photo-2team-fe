import styles from '@/styles/components/title/Title.module.css'
import Button from '../button/button'

export default function Title({
  title, buttonText, onButtonClick, variant = 'default'
}) {
  const titleClass = variant === 'default' ? styles.defaultTitle : styles.secondaryTitle;

  return (
    <div className={styles.titleContainer}>
      <h2 className={titleClass}>{title}</h2>
      {buttonText && (
        <Button type='primary' size='l' onClick={onButtonClick}>
          {buttonText}
        </Button>
      )}
    </div>
  )
}
