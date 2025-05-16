import Title from '@/components/title/Title';
import { Dropdown } from '@/components/dropdown/SortDropdown';
import { optionsData } from '@/lib/data/dropdownOptions';
import styles from '@/styles/components/modal/photoModal/AllDragContents.module.css';
import { useState } from 'react';
import { Search } from '@/components/search/Search';
import UseIsMobileView from '@/lib/hooks/useIsMobileView';
import BottomSheet from '@/components/bottomSheet/BottomSheet';
import { useUser } from '@/contexts/UserProvider';
import MyPhotoList from './MyPhotoList';
import PhotoCardModal from '../marketPlaceModal/PhotoCardModal';

export default function AllDragContents({ title, handleModal }) {
  const [isSellModal, setIsSellModal] = useState(false);
  const [cardData, setCardData] = useState(null);
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
  const handleSellModal = (group) => {
    setCardData(group);
    setIsSellModal(!isSellModal);
  };

  const { myCards } = useUser();

  const isLoading = !myCards || myCards.length === 0;

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

      {isLoading ? (
        <p>로딩 중...</p>
      ) : (
        <div className={styles.holdingPhotoBox}>
          <MyPhotoList data={myCards} handleModal={handleSellModal} />
        </div>
      )}
      <PhotoCardModal
        isOpen={isSellModal}
        onClose={handleSellModal}
        isEdit={false}
        cardData={cardData}
      />
      {isBottomSheetOpen && isMobileView ? <BottomSheet /> : ''}
    </div>
  );
}
