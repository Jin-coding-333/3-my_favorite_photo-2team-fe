import Image from 'next/image';
import styles from '@/styles/components/input/InputUpload.module.css';

export default function InputUpload({ className, name, value = '', setValue }) {
  const handleChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    // console.log(file);
    setValue((prev) => ({ ...prev, [name]: file }));
  };

  return (
    <>
      <div className={`${styles.inputUploadContainerBox} ${className}`}>
        <h1 className={styles.inputTitle}>사진 업로드</h1>
        <div className={styles.fileUploadContainer}>
          <div className={styles.fileNameInputBox}>
            <input
              id="fileUpload"
              name={name}
              className={styles.fileInput}
              defaultValue={value}
              type="file"
              onChange={handleChange}
            />
            <input
              className={styles.fileNameInput}
              type="text"
              defaultValue={value.name}
              readOnly
              placeholder="사진 업로드"
            />
            <button
              className={styles.xButton}
              onClick={() => setValue('')}
              style={{
                position: 'relative',
              }}
            >
              <Image src="/icon/type=close.png" alt="닫기 버튼" fill />
            </button>
          </div>
          <button className={styles.inputUploadButtonBox}>
            <label
              htmlFor="fileUpload"
              className={styles.inputUploadButton}
              type="file"
              accept=".jpg, .png"
              onChange={handleChange}
            >
              파일 선택
            </label>
          </button>
        </div>
      </div>
    </>
  );
}
