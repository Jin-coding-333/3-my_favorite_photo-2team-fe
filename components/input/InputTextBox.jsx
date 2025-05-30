import styles from '@/styles/components/input/InputTextBox.module.css';

export default function InputTextBox({
  className,
  type = '',
  name,
  value = '',
  setValue,
}) {
  const handleChange = (e) => {
    e.preventDefault();
    setValue((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  let typeProps = {
    label: '',
    placeholder: '',
    className: '',
  };

  switch (type) {
    case 'photoCardDes':
      typeProps = {
        label: '포토카드 설명',
        placeholder: '카드 설명을 입력해 주세요',
        className: '',
      };
      break;
    case 'exchangeSuggestion':
      typeProps = {
        label: '교환 제시 내용',
        placeholder: '내용을 입력해 주세요',
        className: 'inputTextBoxContainerChange',
      };
      break;
    case 'exchangeRequest':
      typeProps = {
        label: '교환 희망 설명',
        placeholder: '설명을 입력해 주세요',
        className: 'inputTextBoxContainerexchangeRequest',
      };
      break;
    case '':
      alert('type을 부모 컴포넌트에서 입력해 주세요');
      break;
  }

  return (
    <>
      <div
        className={`${styles.inputTextBoxContainerCardDes} ${className} ${typeProps.className}`}
      >
        <label htmlFor="textInput" className={styles.textBoxLabel}>
          {typeProps.label}
        </label>
        <textarea
          id="textInput"
          name={name}
          className={styles.textBox}
          value={value}
          onChange={handleChange}
          placeholder={typeProps.placeholder}
        />
      </div>
    </>
  );
}
