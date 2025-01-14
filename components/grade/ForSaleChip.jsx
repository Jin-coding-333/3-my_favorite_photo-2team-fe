import styles from '@/styles/components/grade/ForSaleChip.module.css'

export default function ForSaleChip() {
    return (
        <>
            <p className={`${styles.badge} ${styles.badgeSale}`}>판매 중</p>
            <p className={`${styles.badge} ${styles.badgePending}`}>교환 제시 대기 중</p>
        </>
    );
  }