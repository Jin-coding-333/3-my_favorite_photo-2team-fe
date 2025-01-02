import Link from "next/link";
import styles from "@/styles/layout/Header.module.css";

export default function HeaderNoneUser() {
  return (
    <div className={styles.noneUserContainer}>
      <Link href="/login">
        <h2 className={styles.noneUserText}>로그인</h2>
      </Link>

      <Link href="/sign-up">
        <h2 className={styles.noneUserText}>회원가입</h2>
      </Link>
    </div>
  );
}