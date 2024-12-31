import InputDropdownLayout from './InputDropdownLayout';
import { useState } from 'react';

export default function InputDropdownGenre() {
  const options = [
    { label: '여행', value: 'travel' },
    { label: '풍경', value: 'landscape' },
    { label: '인물', value: 'person' },
    { label: '사물', value: 'objects' },
  ];
  const [genre, setGenre] = useState({ label: '장르를 선택해주세요', value: '' });
  //   const genreValue = genre.value;
  const handleSelectOption = (selectedOption) => setGenre(selectedOption);

  return (
    <>
      {/* 장르 */}
      <InputDropdownLayout options={options} option={genre} optionChange={handleSelectOption} />
    </>
  );
}
