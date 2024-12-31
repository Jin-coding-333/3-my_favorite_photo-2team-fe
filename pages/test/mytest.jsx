import BottomSheet from '@/components/bottomSheet/bottomSheet';
import Button from '@/components/button/button';

export default function MyTest() {
  return (
    <>
      <BottomSheet />
      <Button type="primary" size={7} text="buy"></Button>
      <Button type="primary_disabled" size={0} text="buy"></Button>
      <Button type="secondary" size={0} text="free">
        테스트요
      </Button>
    </>
  );
}
