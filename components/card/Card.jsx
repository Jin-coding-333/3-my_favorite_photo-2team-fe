import styles from '@/styles/components/Card.module.css';
import Button from '../button/Button';
import { useEffect, useState } from 'react';
import { useFirstUpperCase } from '@/lib/hooks/convenience';
import ImgHover from './common/ImgHover';
import { BtnPlace, Title, Content, CountBox } from './Card.Component';

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
      case 'mySell':
        setElement(<MyBottom type={type}>{children}</MyBottom>);
        break;
    }
  }, [type, children]);

  return (
    <div className={`${styles.Card} ${styles[_type]}`}>
      <Title grade={grade} genre={genre} userNickName={userNickName} />
      {!type.includes('my') && (
        <Content price={0} count={0} totalCount={0}>
          {children}
        </Content>
      )}
      {element}
    </div>
  );
}

function BuyBottom({ point = 0, totalCount = 0 }) {
  const [count, setCount] = useState(0);
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
          <CountBox count={count} setCount={setCount} totalCount={totalCount} />
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

function SellerBottom({
  children = 'I want to exchange this card',
  grade = 'COMMON',
  genre = 'unknwon',
}) {
  const sellBtn = [
    {
      type: 'primary',
      size: 'xxl',
      children: '수정하기',
      className: styles.SellBtn,
      onClick: () => {
        alert('수정하기');
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
      <p className={styles.TradeTitle}>
        <ImgHover
          alt="trade"
          src={'/icon/refresh.svg'}
          src2={'/icon/refresh_white.svg'}
          width={28}
          height={28}
          className={styles.TradeIcon}
        />
        교환 희망 정보
      </p>
      <Title grade={grade} genre={genre} />
      <Content onlyText={true}>{children}</Content>
      {sellBtn.map((v, i) => {
        return <Button key={i} {...v} />;
      })}
    </div>
  );
}

function MyBottom({ type = 'mySell', children = '', point = 0, totalCount = 0 }) {
  const myBtn = [
    {
      type: 'primary',
      size: 'xxl',
      children: type === 'mySell' ? '포토카드 판매하기' : '포토카드 구매하기',
      onClick: () => {
        alert('포토카드 판매하기');
      },
    },
  ];
  return (
    <div className={styles.MyBottom}>
      <div className={styles.Content}>
        <p className={styles.Text}>{children}</p>
      </div>
      <ul>
        <li>
          <p className={styles.Left}>가격</p>
          <p className={styles.Right}>{point} P</p>
        </li>
        <li>
          <p className={styles.Left}>보유량</p>
          <p className={styles.Right}>{totalCount}</p>
        </li>
      </ul>
      <BtnPlace btn={myBtn} />
    </div>
  );
}
