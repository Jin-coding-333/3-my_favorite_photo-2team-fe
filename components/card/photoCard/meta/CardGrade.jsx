import styles from '@/styles/components/photoCard/meta/CardGrade.module.css';

export default function CardGrade({ grade, type = 'rarity' }) {
  // 타입에 따른 기본 클래스 결정
  const baseClass =
    type === 'rarityThickness' ? styles.rarityThickness : styles.rarity;

  if (grade === 'EPIC') {
    grade = 'SUPERRARE';
  }
  // 상태에 따른 클래스 이름 조합
  const gradeClass = `${type}${grade}`;

  return <p className={`${baseClass} ${styles[gradeClass]}`}>{grade}</p>;
}
