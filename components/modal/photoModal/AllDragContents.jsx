import Title from '@/components/title/Title';
import PhotoCard from '@/components/card/photoCard/PhotoCard';
import { Dropdown } from '@/components/dropdown/SortDropdown';
import { optionsData } from '@/lib/data/dropdownOptions';
import styles from '@/styles/components/modal/photoModal/AllDragContents.module.css';
import { useState } from 'react';
import { Search } from '@/components/search/Search';
import UseIsMobileView from '@/lib/hooks/useIsMobileView';
import BottomSheet from '@/components/bottomSheet/BottomSheet';

export default function AllDragContents({ title, handleModal, myCards }) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const handleBottomSheet = () => {
    setIsBottomSheetOpen(!isBottomSheetOpen);
  };
  const [options, setOptions] = useState({
    grade: '',
    genre: '',
  });
  const handleDropdownChange = (name, value) => {
    setOptions((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isMobileView = UseIsMobileView();

  return (
    <div className={styles.mainContents}>
      <div className={styles.pagename}>마이갤러리</div>
      <div className={styles.topBanner}>
        <Title title={title} size="L" variant="default" />
        {isMobileView ? (
          <div className={styles.inputBoxMobile}>
            <div className={styles.dropdown}>
              {/* <div className={styles.filterBox} onClick={handleBottomSheet}>
                <Image fill src="/icon/type=filter.png" alt="필터 이미지" />
              </div> */}
            </div>
            <Search type="base" className={styles.searchWidth} />
          </div>
        ) : (
          <div className={styles.inputBox}>
            <Search type="marketplace" />

            <div className={styles.dropdownBox}>
              <div className={styles.dropdown}>
                <Dropdown
                  name="grade"
                  value={options.dropdown}
                  options={optionsData.grade}
                  onChange={handleDropdownChange}
                  placeholder="등급"
                  prefix="grade"
                  useMobileFilterImage={true}
                />
              </div>
              <div className={styles.dropdown}>
                <Dropdown
                  name="genre"
                  value={options.genre}
                  options={optionsData.genre}
                  onChange={handleDropdownChange}
                  placeholder="장르"
                  prefix="genre"
                  useMobileFilterImage={true}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.holdingPhotoBox}>
        {/* {myCards.map((card) => (
          <div key={card.id} onClick={handleModal}>
            <PhotoCard cardType="myCard" data={card} />
          </div>
        ))} */}
        {/* 아래는 예시 */}
        {/* <div onClick={handleModal}>
          <PhotoCard cardType="myCard" />
        </div>
        <div onClick={handleModal}>
          <PhotoCard cardType="myCard" />
        </div>
        <div onClick={handleModal}>
          <PhotoCard cardType="myCard" />
        </div>
        <div onClick={handleModal}>
          <PhotoCard cardType="myCard" />
        </div>
        <div onClick={handleModal}>
          <PhotoCard cardType="myCard" />
        </div> */}
      </div>
      {isBottomSheetOpen && isMobileView ? <BottomSheet /> : ''}
    </div>
  );
}
