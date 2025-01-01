import styles from '@/styles/components/InputTextBox.module.css';
import { useState } from 'react';

export default function InputTextBox() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className={styles.inputTextBoxContainer}>
        <label
          htmlFor="textInput"
          className={styles.textBoxLabel}>
          포토카드 설명
        </label>
        <textarea
          id="textInput"
          className={styles.textBox}
          value={text}
          onChange={handleChange}
          placeholder="카드 설명을 입력해 주세요"
        />
      </div>
    </>
  );
}
