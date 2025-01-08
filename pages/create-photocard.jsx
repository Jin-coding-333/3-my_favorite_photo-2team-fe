import InputDropdownGenre from '@/components/dropdown/inputDropdown/InputDropdownGenre';
import InputDropdownGrade from '@/components/dropdown/inputDropdown/InputDropdownGrade';
import styles from '@/styles/pages/create-photocard.module.css';
import { useState } from 'react';

export default function CreatePhotocard() {
  const [form, setForm] = useState({
    title: '',
    grade: '',
    genre: '',
    price: '',
    total: '',
    imgUrl: '',
    description: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    // 제출 함수
    alert(`제출된 데이터:\n${JSON.stringify(form, null, 2)}`);
  }

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.container}>
          <div className={styles.title}>
            <div className={styles.titleFont}>포토카드 생성</div>
            <div className={styles.horizon}></div>
          </div>
          <form onSubmit={handleSubmit} className={styles.formStyle}>
            <div className={styles.inputBox}>
              <div>포토카드 이름</div>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                className={styles.inputStyle}
              />
            </div>
            <div className={styles.inputBox}>
              <div>등급</div>
              <InputDropdownGrade setForm={setForm} />
            </div>
            <div className={styles.inputBox}>
              <div>장르</div>
              <InputDropdownGenre setForm={setForm} />
            </div>
            <div className={styles.inputBox}>
              <div>가격</div>
              <input
                name="price"
                value={form.price}
                onChange={handleChange}
                className={styles.inputStyle}
              />
            </div>
            <div className={styles.inputBox}>
              <div>총 발행량 </div>
              <input
                name="total"
                value={form.total}
                onChange={handleChange}
                className={styles.inputStyle}
              />
            </div>
            <div className={styles.inputBox}>
              <div>사진 업로드</div>
              <input
                name="imgUrl"
                value={form.imgUrl}
                onChange={handleChange}
                className={styles.inputStyle}
              />
            </div>
            <div className={styles.inputBox}>
              <div>포토카드 설명</div>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                className={styles.inputStyle}
              />
            </div>
            <button className={styles.submitBt}>생성하기</button>
          </form>
        </div>
      </div>
    </>
  );
}
