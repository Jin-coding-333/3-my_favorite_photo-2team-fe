import styles from "@/styles/layout/PageLayout.module.css";

export default function PageLayout({ children, fixedButtonLabel, onButtonClick }) {
  return (
    <div className={styles.pageLayout}>
      <div className={styles.titleLayout}></div>
      <div className={styles.contentLayout}>{children}</div>
    </div>
  );
}
