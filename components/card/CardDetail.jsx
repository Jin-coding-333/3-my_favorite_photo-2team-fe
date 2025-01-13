import styles from '@/styles/components/Card.module.css';
import { CountBox, Title } from './Card.Component';
import { useState } from 'react';

export default function CardDetail({
  grade = 'COMMON',
  genre = 'unknwon',
  userNickName = '유저이름',
  totalCount = 0,
}) {
  const [count, setCount] = useState(0);
  return (
    <div className={`${styles.Card} ${styles.Detail}`}>
      <Title grade={grade} genre={genre} userNickName={userNickName} />
      <ul>
        <li>
          <p className={styles.Left}>총 판매 수량</p>
          <div className={styles.Right}>
            <CountBox count={count} totalCount={totalCount} setCount={setCount} />
            <div className={styles.TotalCount}>
              <p className={styles.Number}>/ {totalCount}</p>
              <p className={styles.String}>최대 {totalCount}장</p>
            </div>
          </div>
        </li>
        <li>
          <p className={styles.Left}>장당 가격</p>
          <div className={styles.PointBox}>
            <input type="text" placeholder="숫자만 입력" />
            <p>P</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
