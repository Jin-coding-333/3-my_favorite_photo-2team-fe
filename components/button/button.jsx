import styles from '@/styles/components/button.module.css';
/**
 * @param type - "primary"|"primary_disabled"|"secondary"
 * @param size - xxxl xxl xl l m s xs
 * @param onClick - 클릭 이벤트 핸들러
 * @reference https://github.com/Jin-coding-333/3-my_favorite_photo-2team-fe/pull/4
 */
export default function Button({ type = 'primary', size = '', onClick, children }) {
  const btnClass = `${styles.Button} ${styles[type]} ${styles[size]}`;
  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
}
