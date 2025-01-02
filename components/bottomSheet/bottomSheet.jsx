import { grade } from '@/lib/data/grade';
import styles from '@/styles/bottomSheet.module.css';
import ImgHover from '../imgHover';
import { useState } from 'react';
import { genre, soldOutState } from '@/lib/data/etcData';
const filter = [
  {
    name: '등급',
    className: styles.grade,
    list: grade,
  },
  { name: '장르', className: styles.genre, list: genre },
  { name: '매진 여부', className: styles.soldOutState, list: soldOutState },
];

export default function BottomSheet({ totalCount = 0 }) {
  const [listValue, setListValue] = useState({
    value: filter[0].list,
    className: filter[0].className,
  });
  const labelClickHandle = (values) => {
    setListValue({
      ...listValue,
      value: values.list,
      className: values.className,
    });
  };
  return (
    <>
      <div className={styles.BottomSheet}>
        <div className={styles.Top}>
          <h2 className={styles.Title}>필터</h2>
          <div className={styles.CloseBtn}></div>
        </div>
        <Labels onClick={labelClickHandle} />
        <div className={`${styles.Lists} ${listValue.className}`}>
          {listValue.value.map((v, i) => {
            let on = '';
            if (i === 0) on = styles.on;
            return <List name={v.name} color={v.color} count={0} key={v.name} className={on} />;
          })}
        </div>
        <div className={styles.Bottom}>
          <ImgHover
            src="/icon/refresh.svg"
            src2="/icon/refresh_white.svg"
            alt="새로고침"
            width={24}
            height={24}
          />
          <button className={styles.Button}>{totalCount}개 포토보기</button>
        </div>
      </div>
    </>
  );
}

function Labels({ onClick }) {
  const [target, setTarget] = useState('등급');
  const clickHandle = (e) => {
    const t = e.currentTarget.textContent;
    const find = filter.find((x) => x.name === t);
    setTarget(t);
    onClick(find);
  };
  return (
    <div className={styles.Labels}>
      {filter.map((v, i) => {
        let on = '';
        if (v.name === target) on = styles.on;
        return (
          <div key={v.name} onClick={clickHandle} className={`${styles.Label} ${on}`}>
            {v.name}
          </div>
        );
      })}
    </div>
  );
}

function List({ name, count = 0, color, className }) {
  return (
    <div className={`${styles.List} ${className}`}>
      <p className={styles.Name} style={{ color }}>
        {name}
      </p>
      <p className={styles.Count}>{count}</p>
    </div>
  );
}
