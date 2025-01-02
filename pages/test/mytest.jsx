import BottomSheet from '@/components/bottomSheet/bottomSheet';
import Button from '@/components/button_/Button';

export default function MyTest() {
  return (
    <>
      <BottomSheet />
      <br />
      <br />
      <Button type="primary" size={'xxl'}>
        포토카드 구매하기
      </Button>
      <br />
      <br />
      <Button type="primary_disabled" size={'xxl'}>
        포토카드 판매하기
      </Button>
      <br />
      <br />
      <Button type="secondary" size={'s'}>
        테스트요
      </Button>
      <br />
      <br />
    </>
  );
}
