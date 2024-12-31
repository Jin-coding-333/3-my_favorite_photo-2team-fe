import { useEffect, useState } from 'react';
import styles from '@/styles/button.module.css';

const Size = [
  {
    width: 440,
    height: 80,
  },
  {
    width: 440,
    height: 55,
  },
  {
    width: 520,
    height: 60,
  },
  {
    width: 345,
    height: 75,
  },
  {
    width: 345,
    height: 55,
  },
  {
    width: 345,
    height: 55,
  },
  {
    width: 342,
    height: 75,
  },
  {
    width: 150,
    height: 40,
    fontSize: '12px',
    fontWeight: 700,
  },
];
const texts = {
  buy: '포토카드 구매하기',
  trade: '포토카드 교환하기',
  sellOff: '판매 내리기',
  allow: '승인',
  reject: '거절',
};
const init = {
  dispaly: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

/**
 * @param {ButtonProps} props
 * @param type primary/primary_disabled/secondary
 * @param onClick onClick event
 * @param text buy: '포토카드 구매하기'/ trade: '포토카드 교환하기'/ sellOff: '판매 내리기'/ allow: '승인' / reject: '거절 / free: children 으로 값 지정
 * @param size Int///
 * 0: {width: 440,height: 80} ///
   1: {width: 440,height: 55} ///
   2: {width: 520,height: 60} ///
   3: {width: 345,height: 75} ///
   4: {width: 345,height: 55} ///
   5: {width: 345,height: 55} ///
   6: {width: 342,height: 75} ///
   7: {width: 150,height: 40} ///
 * @returns
 */
export default function Button({ type = 'primary', size = 0, text = 'free', onClick, children }) {
  const [btnStyle, setBtnStyle] = useState({
    ...init,
    ...Size[size],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    switch (type) {
      case 'primary':
        setBtnStyle({
          ...btnStyle,
          color: '#0f0f0f',
          backgroundColor: '#EFFF04',
        });
        break;
      case 'primary_disabled':
        setBtnStyle({
          ...btnStyle,
          color: '#A4A4A4',
          backgroundColor: '#5A5A5A',
        });
        break;
      case 'secondary':
        setBtnStyle({
          ...btnStyle,
          color: '#FFFFFF',
          fontWeight: 500,
          backgroundColor: '#0F0F0F',
          border: '1px solid #eee',
        });
        break;
    }
    setIsLoading(false);
  }, [type, size]);

  if (isLoading) return null;
  return (
    <button className={styles.Button} onClick={onClick} style={btnStyle}>
      {text === 'free' ? children : texts[text]}
    </button>
  );
}
