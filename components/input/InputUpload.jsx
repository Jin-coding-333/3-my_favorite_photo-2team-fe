import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/components/InputUpload.module.css';

export default function InputUpload() {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    const fileName = e.target.files[0].name;
    setValue(fileName);
  };

  return (
    <>
      <div className={styles.inputUploadContainerBox}>
        <h1 className={styles.inputTitle}>사진 업로드</h1>
        <div className={styles.fileUploadContainer}>
          <div className={styles.fileNameInputBox}>
            <input
              id='fileUpload'
              className={styles.fileInput}
              type="file"
              onChange={handleChange}
            />
            <input
              className={styles.fileNameInput}
              type="text"
              value={value}
              readOnly
              placeholder='사진 업로드'
            />
            <button
              className={styles.xButton}
              onClick={() => setValue('')}
              style={{
                position: 'relative',
              }}
            >
              <Image
                src="/icon/type=close.png"
                alt='닫기 버튼'
                fill
              />
            </button>
          </div>
          <button className={styles.inputUploadButtonBox}>
            <label
              htmlFor='fileUpload'
              className={styles.inputUploadButton}
              type="file"
              accept=".jpg, .png"
              onChange={handleChange}>
              파일 선택
            </label>
          </button>
        </div>
      </div>
    </>
  );
}
