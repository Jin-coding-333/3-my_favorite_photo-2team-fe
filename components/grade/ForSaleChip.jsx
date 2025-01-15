import styles from '@/styles/components/grade/ForSaleChip.module.css';

export default function ForSaleChip({ status }) {
  // 상태에 따라 클래스 결정
  const className =
    status === '판매 중' ? styles.badgeSale :
    status === '교환 제시 대기 중' ? styles.badgePending :
    '';

  return (
    <p className={`${styles.badge} ${className}`}>
      {status}
    </p>
  );
}
