import styles from '@/styles/pages/market-place/create.module.css';
import Input from '@/components/input/Input';
import { useEffect, useState } from 'react';
import InputDropdownGrade from '@/components/inputDropdown/InputDropdownGrade';
import InputDropdownGenre from '@/components/inputDropdown/InputDropdownGenre';
import InputUpload from '@/components/input/InputUpload';
import Title from '@/components/title/Title';
import Button from '@/components/button/Button';
import InputTextBox from '@/components/input/InputTextBox';

function MarketCreate() {
  const [values, setValues] = useState({
    name: '',
    grade: '',
    quantity: 0,
  });
  function changeHandle(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }
  const common = {
    inputClassName: styles.input,
    onChange: changeHandle,
    className: styles.inputCover,
  };
  const inputs = [
    {
      name: 'price',
      type: 'price',
      value: values.name,
      ...common,
    },
    {
      name: 'quantity',
      type: 'quantity',
      value: values.quantity,
      ...common,
    },
  ];
  useEffect(() => {
    console.log(values);
  }, [values]);
  return (
    <div className={styles.create}>
      <Title
        size="L"
        title={'포토카드 생성하기'}
        variant="secondaryTitle"
        className={`${styles.title}`}
      />
      <div className={styles.inner}>
        <Input
          className={styles.inputCover}
          name="name"
          type="photoName"
          inputClassName={styles.input}
          value={values.name}
          onChange={changeHandle}
        />
        <InputDropdownGrade className={styles.inputCover} setForm={setValues} />
        <InputDropdownGenre className={styles.inputCover} setForm={setValues} />
        {inputs.map((v, i) => {
          return <Input {...v} />;
        })}
        <InputUpload className={styles.inputCover} />
        <InputTextBox type="photoCardDes" />
        <Button className={styles.button} size="xxxl">
          생성하기
        </Button>
      </div>
    </div>
  );
}

export default MarketCreate;
