import CardDetail from '@/components/card/CardDetail';
import Card from '../components/card/Card';

export default function Test({}) {
  return (
    <div style={{ display: 'inline-flex', flexWrap: 'wrap' }}>
      <Card>여기 텍스트</Card>
      <Card type="sell">여기 텍스트</Card>
      <Card type="mySell">여기 텍스트</Card>
      <CardDetail totalCount={3}></CardDetail>
    </div>
  );
}
