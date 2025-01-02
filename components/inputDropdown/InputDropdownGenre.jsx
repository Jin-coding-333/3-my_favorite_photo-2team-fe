import InputDropdownLayout from './InputDropdownLayout';
import { useState } from 'react';

export default function InputDropdownGenre({ setForm }) {
  // 옵션들. 필요시 변경 혹은 추가
  const options = [
    { label: '여행', value: 'travel' },
    { label: '풍경', value: 'landscape' },
    { label: '인물', value: 'person' },
    { label: '사물', value: 'objects' },
  ];
  // 선택된 드롭다운 초기값은은 따로
  const [genre, setGenre] = useState({ label: '장르를 선택해주세요', value: '' });
  
  const handleSelectOption = (selectedOption) => {
    setGenre(selectedOption);
    setForm((prevValues) => ({
      ...prevValues,
      genre: selectedOption.value, // 부모 상태 업데이트
    }));
  };

  return (
    <>
      {/* 장르 */}
      <InputDropdownLayout options={options} option={genre} optionChange={handleSelectOption} />
    </>
  );
}
