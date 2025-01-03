import Card from '@/components/_card/Card';
import CardDetail from '@/components/_card/CardDetail';

export default function MyTest() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Card>안녕하십니까</Card>
      <Card type={'sell'}>안녕하십니까</Card>
      <CardDetail />
      <Card type={'mySell'}></Card>
      <Card type={'myBuy'}>응ㅇ </Card>
    </div>
  );
}
