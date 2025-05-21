import PhotocardList from '@/components/pages/my-sale-photocard/PhotocardList';
import PhotoCardSaleSearch from '@/components/pages/SearchSortComponent/PhotoCardSaleSearch';
import CardCountStatus from '@/components/title/CardCountStatus';
import Title from '@/components/title/Title';
import PageLayout from '@/layout/PageLayout';

export default function MySalePhotocard() {
  return (
    <>
      <PageLayout>
        <Title title="나의 판매 포토카드" size="L" variant="secondaryTitle" />
        <CardCountStatus page="mySalePhotocard" />
        <PhotoCardSaleSearch />
        <PhotocardList />
      </PageLayout>
    </>
  );
}
