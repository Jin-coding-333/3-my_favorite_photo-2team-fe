import PhotoCard from '@/components/card/photoCard/PhotoCard';

export default function MyPhotoList({ data = [], handleModal }) {
  console.log('mycards', data);

  // 같은 유니크id 카드 수량
  const cardCounts = data.reduce((acc, card) => {
    acc[card.uniqueId] = (acc[card.uniqueId] || 0) + 1;
    return acc;
  }, {});

  // 같은 유니크id끼리 그룹화
  const groupedCards = Object.keys(cardCounts).map((uniqueId) => {
    const cardsWithUniqueId = data.filter((card) => card.uniqueId === uniqueId);
    return {
      uniqueId,
      count: cardCounts[uniqueId],
      cards: cardsWithUniqueId,
    };
  });

  console.log(groupedCards);
  console.log('test1', groupedCards[0].cards);
  console.log('test2', groupedCards[0].cards[0].imagePath);
  return (
    <>
      {groupedCards.length > 0 ? (
        groupedCards.map((group) => (
          <div key={group.uniqueId} onClick={handleModal}>
            <PhotoCard cardType="myCard" data={group} />
          </div>
        ))
      ) : (
        <p>카드가 없어용</p>
      )}
    </>
  );
}
