import { useState } from 'react';
import { optionsData } from '@/lib/data/dropdownOptions';
import { Dropdown } from '@/components/dropdown/SortDropdown';
import { Search } from '@/components/search/Search';
import BottomSheet from '@/components/bottomSheet/BottomSheet';
import Image from 'next/image';
import filterImg from '@/public/icon/type=filter.png';
import styles from '@/styles/components/pages/SearchSortComponent/PhotoCardSaleSearch.module.css';

export default function PhotoCardSaleSearch() {
  const [selectedOptions, setSelectedOptions] = useState({
    sort: '',
    chip: '',
    grade: '',
    availability: '',
    genre: '',
  });
  const [isfilter, setIsfilter] = useState(false);

  const handleDropdownChange = (name, value) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const toggleBottomSheet = () => {
    setIsfilter((prev) => !prev);
  };

  const closeBottomSheet = () => {
    setIsfilter(false);
  };

  return (
    <>
      <div className={styles.searchLayout}>
        <div className={styles.filter}>
          <div className={styles.icon}>
            <Image
              src={filterImg}
              alt="filter 이미지"
              width={20}
              height={20}
              onClick={toggleBottomSheet}
            />
          </div>
          <div className={styles.search}>
            <Search type="base" />
          </div>
          <div className={styles.dropdowns}>
            <Dropdown
              name="grade"
              value={selectedOptions.grade}
              options={optionsData.grade}
              onChange={handleDropdownChange}
              placeholder="등급"
              prefix="grade"
            />
            <Dropdown
              name="genre"
              value={selectedOptions.genre}
              options={optionsData.genre}
              onChange={handleDropdownChange}
              placeholder="장르"
              prefix="genre"
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
          </div>
        </div>
      </div>
      {isfilter && <BottomSheet onClose={closeBottomSheet} />}
    </>
  );
}
