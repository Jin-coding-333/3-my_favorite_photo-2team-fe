import Button from '../button/Button';
import styles from '@/styles/components/Card.module.css';

export function BtnPlace({ btn = [] }) {
  return (
    <div className={styles.BtnPlace}>
      {btn.map((v, i) => (
        <Button key={i} {...v} />
      ))}
    </div>
  );
}

export function Title({ grade = 'COMMON', genre = 'unknwon', userNickName }) {
  return (
    <div className={styles.Title}>
      <div className={styles.Top}>
        <p className={styles.Grade}>{grade}</p>
        <div className={styles.TitleLine}></div>
        <p className={styles.Genre}>{genre}</p>
      </div>
      {userNickName && (
        <div className={styles.UserNickName}>{userNickName}</div>
      )}
    </div>
  );
}

export function Content({
  children = '',
  price = 0,
  count = 0,
  totalCount = 0,
  onlyText = false,
}) {
  return (
    <div className={styles.Content}>
      <div className={styles.Text}>{children}</div>
      {onlyText ? null : (
        <ul className={styles.Bottom}>
          <li className={styles.Price}>
            <p className={styles.Left}>가격</p>
            <div className={styles.Right}>{price} P</div>
          </li>
          <li>
            <p className={styles.Left}>잔여</p>
            <div className={styles.Right}>
              <span className={styles.Current}>{count}</span>
              <span className={`${styles.Gray} ${styles.Slash}`}>/</span>
              <span className={styles.Gray}>{totalCount}</span>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
}

export function CountBox({ count = 0, setCount, totalCount = 0 }) {
  function increase() {
    if (count >= totalCount) return alert('더 이상 구매할 수 없습니다.');
    setCount(count + 1);
  }
  function decrease() {
    if (count <= 0) return alert('더 이상 감소할 수 없습니다.');
    setCount(count - 1);
  }
  return (
    <div className={styles.CountBox}>
      <button className={styles.minus} onClick={decrease}>
        -
      </button>
      <input type="number" value={count} />
      <button className={styles.plus} onClick={increase}>
        +
      </button>
    </div>
  );
}
