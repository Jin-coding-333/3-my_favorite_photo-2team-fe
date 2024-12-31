import { useState } from 'react';
import InputDropdownLayout from './InputDropdownLayout';

export default function InputDropdownGrade() {
  // 드롭다운 옵션들
  const options = [
    { label: 'COMMON', value: 'common' },
    { label: 'RARE', value: 'rare' },
    { label: 'SUPER RARE', value: 'superRare' },
    { label: 'LEGENDARY', value: 'legendary' },
  ];
  //선택된 드롭다운
  const [grade, setGrade] = useState({ label: '등급을 선택해주세요', value: '' });
  // 옵션 값 나중에 api에 넣을 거
  //const gradeValue = grade.value;

  const handleSelectOption = (selectedOption) => setGrade(selectedOption);

  return (
    <>
      {/* 등급 */}
      <InputDropdownLayout options={options} option={grade} optionChange={handleSelectOption} />
    </>
  );
}
