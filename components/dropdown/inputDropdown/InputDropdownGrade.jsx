import { useState } from 'react';
import InputDropdownLayout from './InputDropdownLayout';

export default function InputDropdownGrade({ setForm, className, classNameSize }) {
  // 옵션들.  필요시 변경 혹은 추가
  const options = [
    { label: 'COMMON', value: 'COMMON' },
    { label: 'RARE', value: 'RARE' },
    { label: 'SUPER RARE', value: 'SUPER RARE' },
    { label: 'LEGENDARY', value: 'LEGENDARY' },
  ];
  // 선택된 드롭다운 초기값은은 따로
  const [grade, setGrade] = useState({ label: '등급을 선택해주세요', value: '' });

  const handleSelectOption = (selectedOption) => {
    setGrade(selectedOption);
    setForm((prevValues) => ({
      ...prevValues,
      grade: selectedOption.value, // 부모 상태 업데이트
    }));
  };

  return (
    <>
      {/* 등급 */}
      <InputDropdownLayout
        className={className}
        classNameSize={classNameSize}
        label={'등급'}
        options={options}
        option={grade}
        optionChange={handleSelectOption}
      />
    </>
  );
}
