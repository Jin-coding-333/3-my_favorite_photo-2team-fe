import { useEffect, useState } from 'react';
import styles from '@/styles/button.module.css';

const Size = {
  xxxl: {
    width: 520,
    height: 60,
  },
  xxl: {
    width: 440,
    height: 80,
  },
  xl: {
    width: 440,
    height: 55,
  },

  l: {
    width: 345,
    height: 75,
  },
  m: {
    width: 345,
    height: 55,
  },
  s: {
    width: 345,
    height: 55,
  },
  xs: {
    width: 342,
    height: 75,
  },
  xxs: {
    width: 150,
    height: 40,
    fontSize: '12px',
    fontWeight: 700,
  },
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
 * @param size Int///
 * xxxl: {width: 520,height: 60} ///
    xxl: {width: 440,height: 80} ///
     xl: {width: 440,height: 55} ///
      l: {width: 345,height: 75} ///
      m: {width: 345,height: 55} ///
      s: {width: 345,height: 55} ///
     xs: {width: 342,height: 75} ///
    xxs: {width: 150,height: 40} ///
 * @returns
 */
export default function Button({ type = 'primary', size = '', onClick, children }) {
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
      {children}
    </button>
  );
}
