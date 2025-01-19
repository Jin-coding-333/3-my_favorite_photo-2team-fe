import Image from "next/image";
import styles from "@/styles/pages/404.module.css";
import Button from "@/components/button/Button";
import { useRouter } from "next/router";

export default function page404() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <>
      <div className={styles.page404Container}>
        <div
          className={styles.page404Box}
          style={{
            position: 'relative',
          }}
        >
          <Image
            src='/img/404page_image.png'
            alt="404 Not Found Image"
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <h1 className={styles.title2}>
          찾을 수 없는
        페이지 입니다!<span className={styles.mainColor}></span>
      </h1>
      <Button
        type='primary'
        onClick={handleGoHome}
        className={styles.buttonStyle}
      >
        홈으로 돌아가기
      </Button>
    </div >
    </>
  )
}