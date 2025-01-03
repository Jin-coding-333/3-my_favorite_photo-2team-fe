import styles from '@/styles/components/Card.module.css';
import Button from '../button/Button';
import { useEffect, useState } from 'react';
import { useFirstUpperCase } from '@/lib/hooks/convenience';

/**
 *
 * @param {*} type buy , sell
 * @reference https://github.com/Jin-coding-333/3-my_favorite_photo-2team-fe/pull/8
 */
export default function Card({
  children = 'Non Text',
  type = 'buy',
  grade = 'COMMON',
  genre = 'unknwon',
  userNickName = '유저이름',
}) {
  const _type = useFirstUpperCase(type);
  const [element, setElement] = useState(null);
  useEffect(() => {
    switch (type) {
      case 'buy':
        setElement(<BuyBottom point={0} totalCount={0} />);
        break;
      case 'sell':
        setElement(<SellerBottom />);
        break;
      default:
        null;
        break;
    }
  }, [type]);
  return (
    <div className={`${styles.Card} ${styles[_type]}`}>
      <Title grade={grade} genre={genre} userNickName={userNickName} />
      <Content price={0} count={0}>
        {children}
      </Content>
      {element}
    </div>
  );
}

function Title({ grade = 'COMMON', genre = 'unknwon', userNickName = '유저이름' }) {
  return (
    <div className={styles.Title}>
      <div className={styles.Top}>
        <p className={styles.Grade}>{grade}</p>
        <div className={styles.TitleLine}></div>
        <p className={styles.Genre}>{genre}</p>
      </div>
      <div className={styles.UserNickName}>{userNickName}</div>
    </div>
  );
}

function Content({ children = '', price = 0, count = 0, totalCount = 0 }) {
  return (
    <div className={styles.Content}>
      <div className={styles.Text}>{children}</div>
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
    </div>
  );
}

function BuyBottom({ point = 0, totalCount = 0 }) {
  const [count, setCount] = useState(0);
  function increase() {
    if (count >= totalCount) return alert('최대 구매 가능 수량입니다.');
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  const buyBtn = [
    {
      type: 'primary',
      size: 'xxl',
      children: '포토카드 구매하기',
      onClick: () => {
        alert('포토카드 구매하기');
      },
    },
  ];
  return (
    <>
      <ul className={styles.BuyBottom}>
        <li>
          <p className={styles.Left}>구매 수량</p>
          <div className={styles.CountBox}>
            <button className={styles.minus} onClick={decrease}>
              -
            </button>
            <input type="number" value={count} />
            <button className={styles.plus} onClick={increase}>
              +
            </button>
          </div>
        </li>
        <li>
          <p className={styles.Left}>총 가격</p>
          <div className={styles.Right}>
            <span className={styles.Price}>{point * count} P</span>({count}장)
          </div>
        </li>
      </ul>
      <BtnPlace btn={buyBtn} />
    </>
  );
}

function SellerBottom({}) {
  const sellBtn = [
    {
      type: 'primary',
      size: 'xxl',
      children: '판매하기',
      onClick: () => {
        alert('판매하기');
      },
    },
    {
      type: 'secondary',
      size: 'xxl',
      children: '판매 내리기',
      onClick: () => {
        alert('판매 내리기');
      },
    },
  ];
  return (
    <div className={styles.SellerBottom}>
      {sellBtn.map((v, i) => {
        return <Button key={i} {...v} />;
      })}
      {/* <Button type="primary" size="xxl" className={styles.Button}>
        판매하기
      </Button>
      <Button type="secondary" size="xxl" className={styles.Button}>
        판매 내리기
      </Button> */}
    </div>
  );
}

function BtnPlace({ children, btn = [] }) {
  return (
    <div className={styles.BtnPlace}>
      {btn.map((v, i) => (
        <Button key={i} {...v} />
      ))}
    </div>
  );
}
