import styles from '@/styles/pages/my-gallery/Create.module.css';
import Input from '@/components/input/Input';
import { useState } from 'react';
import InputDropdownGenre from '@/components/dropdown/inputDropdown/InputDropdownGenre';
import InputDropdownGrade from '@/components/dropdown/inputDropdown/InputDropdownGrade';
import InputUpload from '@/components/input/InputUpload';
import Title from '@/components/title/Title';
import Button from '@/components/button/Button';
import InputTextBox from '@/components/input/InputTextBox';
import { onlyNumber } from '@/lib/hooks/convenience';
import { useUser } from '@/contexts/UserProvider';
import { useAuth } from '@/contexts/AuthProvier';

function ShopCreate() {
  const { cardCreate, card_isPending } = useUser();
  const [values, setValues] = useState({
    name: '',
    grade: '',
    genre: '',
    price: '',
    totalQuantity: '',
    imagePath: '',
    description: '',
  });
  function changeHandle(e) {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === 'price' || name === 'totalQuantity') {
      if (!onlyNumber(Number(value))) return alert('숫자만 입력하세요');
    }
    setValues({
      ...values,
      [name]: value,
    });
  }

  async function submitHandle() {
    // id                String     @id @default(uuid())
    // name              String
    // grade             String     @default("common")
    // genre             String     @default("unknwon")
    // price             Int        @default(0)
    // remainingQuantity Int        @default(0)
    // totalQuantity     Int        @default(0)
    // description       String     @default("")
    // imagePath         String
    // userId            String
    await cardCreate(values);
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
      value: values.price,
      ...common,
    },
    {
      name: 'totalQuantity',
      type: 'quantity',
      value: values.totalQuantity,
      ...common,
    },
  ];
  if (card_isPending) return 'loding';

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
          return <Input key={v.name} {...v} />;
        })}
        <InputUpload
          name="imagePath"
          className={styles.inputCover}
          setValue={setValues}
          value={values.imagePath}
        />
        <InputTextBox
          className={styles.textbox}
          type="photoCardDes"
          name="description"
          setValue={setValues}
          value={values.description}
        />
        <Button className={styles.button} size="xxxl" onClick={submitHandle}>
          생성하기
        </Button>
      </div>
    </div>
  );
}

export default ShopCreate;
