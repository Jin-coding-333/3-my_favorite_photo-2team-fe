import styles from '@/styles/components/grade/CardGrade.module.css'

export default function CardGrade() {
  return (
    <>
      <p className={`${styles.rarity} ${styles.rarityCommon}`}>COMMON</p>
      <p className={`${styles.rarity} ${styles.rarityRare}`}>RARE</p>
      <p className={`${styles.rarity} ${styles.raritySuperRare}`}>SUPER RARE</p>
      <p className={`${styles.rarity} ${styles.rarityLegendary}`}>LEGENDARY</p>

      <p className={`${styles.rarityCard} ${styles.rarityCardCommon}`}>COMMON</p>
      <p className={`${styles.rarityCard} ${styles.rarityCardRare}`}>RARE</p>
      <p className={`${styles.rarityCard} ${styles.rarityCardSuperRare}`}>SUPER RARE</p>
      <p className={`${styles.rarityCard} ${styles.rarityCardLegendary}`}>LEGENDARY</p>
    </>
  );
}