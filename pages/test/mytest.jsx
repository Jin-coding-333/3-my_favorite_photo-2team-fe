import BottomSheet from '@/components/bottomSheet/BottomSheet';
import Button from '@/components/button/Button';
import Card from '@/components/_card/Card';

export default function MyTest() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <BottomSheet />
      <Card>안녕하십니까</Card>
      <Card type={'sell'}>안녕하십니까</Card>
    </div>
  );
}
