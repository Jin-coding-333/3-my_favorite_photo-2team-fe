import { useEffect, useRef, useState } from 'react';
import dropdownArrowImg from '@/public/icon/type=down.png';
import filterImg from '@/public/icon/type=filter.png';
import Image from 'next/image';
import styles from '@/styles/components/dropdown/SortDropdown.module.css';

export function Dropdown({
  name,
  value,
  options,
  onChange,
  placeholder = '선택',
  prefix,
  useMobileFilterImage = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const inputRef = useRef(null);

  const handleInputClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleBlur = (e) => {
    if (!inputRef.current?.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (useMobileFilterImage) {
      const handleResize = () => {
        setIsMobileView(window.innerWidth <= 744);
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [useMobileFilterImage]);

  useEffect(() => {
    const handleClick = (e) => {
      if (!inputRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  const selectOption = options.find((option) => option.value === value);

  return (
    <div
      className={`${styles[`${prefix}Input`]} ${isOpen ? styles[`${prefix}Opened`] : ''}`}
      onClick={handleInputClick}
      onBlur={handleBlur}
      ref={inputRef}
    >
      {useMobileFilterImage && isMobileView ? (
        <div className={styles[`${prefix}SelectedOption`]}>
          <Image src={filterImg} alt="필터 이미지" className={styles[`${prefix}Arrow`]} />
        </div>
      ) : (
        <>
          <div className={styles[`${prefix}SelectedOption`]}>
            {selectOption ? selectOption.label : placeholder}
            <Image
              src={dropdownArrowImg}
              alt="화살표 이미지"
              className={styles[`${prefix}Arrow`]}
            />
          </div>
        </>
      )}
      {isOpen && (
        <div className={styles[`${prefix}Options`]}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`${styles[`${prefix}Option`]} ${
                value === option.value ? styles[`${prefix}Selected`] : ''
              }`}
              onClick={(e) => {
                e.stopPropagation();
                onChange(name, option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/*
optionsData를 import하시고

const [selectedOptions, setSelectedOptions] = useState({
  sort: '',
  chip: '',
  grade: '',
  availability: '',
  genre: '',
});

const handleDropdownChange = (name, value) => {
  setSelectedOptions((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};

<Dropdown
  name="sort"
  value={selectedOptions.sort}
  options={optionsData.sort}
  onChange={handleDropdownChange}
  placeholder="최신 순"
  prefix="sort"
/>
<Dropdown
  name="chip"
  value={selectedOptions.chip}
  options={optionsData.chip}
  onChange={handleDropdownChange}
  placeholder="판매방법"
  prefix="chip"
/>
<Dropdown
  name="saleStatus"
  value={selectedOptions.saleStatus}
  options={optionsData.saleStatus}
  onChange={handleDropdownChange}
  placeholder="매진여부"
  prefix="saleStatus"
/>
<Dropdown
  name="grade"
  value={selectedOptions.grade}
  options={optionsData.grade}
  onChange={handleDropdownChange}
  placeholder="등급"
  prefix="grade"
  useMobileFilterImage={true}
/>
<Dropdown
  name="genre"
  value={selectedOptions.genre}
  options={optionsData.genre}
  onChange={handleDropdownChange}
  placeholder="장르"
  prefix="genre"
/>
*/
