import InputDropdownLayout from './InputDropdownLayout';
import { useState } from 'react';

export default function InputDropdownGenre() {
  // 옵션들. 필요시 변경 혹은 추가
  const options = [
    { label: '여행', value: 'travel' },
    { label: '풍경', value: 'landscape' },
    { label: '인물', value: 'person' },
    { label: '사물', value: 'objects' },
  ];
  // 선택된 드롭다운 초기값은은 따로 
  const [genre, setGenre] = useState({ label: '장르를 선택해주세요', value: '' });
  //나중에 api에 값 필요하면 쓸거
  //   const genreValue = genre.value; 
  const handleSelectOption = (selectedOption) => setGenre(selectedOption);

  return (
    <>
      {/* 장르 */}
      <InputDropdownLayout options={options} option={genre} optionChange={handleSelectOption} />
    </>
  );
}
