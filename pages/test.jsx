import Card from '../components/card/Card';

export default function Test({}) {
  return (
    <div style={{ display: 'flex' }}>
      <Card>여기 텍스트</Card>
      <Card type="sell">여기 텍스트</Card>
      <Card type="buy">여기 텍스트</Card>
    </div>
  );
}
