import { useState, useEffect } from 'react';
import axios from 'axios';
import Title from '@/components/title/Title.jsx';
import styles from '@/styles/components/photoCard/PhotoCardBuyer.module.css';
import Card from '@/components/card/Card.jsx';
import PhotoCard from '@/components/card/photoCard/PhotoCard.jsx';
import { Title as CardType } from '@/components/card/Card.Component.jsx';
import { useAuth } from '@/contexts/AuthProvier';
import Image from 'next/image';
import Modal from '@/components/modal/Modal.jsx';

export default function PhotoCardDetails() {
  const { user } = useAuth();
  const [pageType, setPageType] = useState('buy'); //데이터없어서 임시로
  const [photoCardData, setPhotoCardData] = useState();
  const [exchangeMessage, setExchangeMessage] = useState('');
  const imgPath = response.data.card.imagePath;

  useEffect(() => {
    const PhotoCardData = async () => {
      try {
        const shopId = 1;
        const response = await axios.get(`http://localhost:10000/api/shop/cards/${shopId}`);
        console.log(response.data.card.imagePath);
        setPhotoCardData(response.data.card);

        if (response.data.card && Array.isArray(response.data.card)) {
          if (response.data.card.length > 0) {
            setExchangeMessage(response.data.card[0].description);
          }
          const isOwner = response.data.card.some((card) => card.userId === user.id);
          setPageType(isOwner ? 'sell' : 'buy');
        }
      } catch (error) {
        console.error('오류가 발생하였습니다', error);
      }
    };

    PhotoCardData();
  }, [user]);

  const Buyer = pageType === 'buy';
  const Seller = pageType === 'sell';

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>마켓플레이스</h1>
      <Title className={styles.cardDetail} title="우리집 앞마당" size="L" />

      {Seller && (
        <>
          <div className={styles.centerContent}>
            <Image className={styles.cardImg} src={imgPath} alt="포토카드 이미지" />

            <Card
              className={styles.Card}
              type="sell"
              grade="RARE"
              genre="Fantasy"
              userNickName={user?.name || 'Unknown'}
            />
          </div>
          <Title className={styles.title} title="교환 제시 목록" size="L" />
          <div className={styles.Tradelist}>
            {Array.isArray(photoCardData) &&
              photoCardData
                .slice(0, 2)
                .map((data) => (
                  <PhotoCard key={data.id} cardType="exchange" isSoldOut={false} data={data} />
                ))}
          </div>
        </>
      )}

      {Buyer && (
        <>
          <div className={styles.centerContent}>
            <Image className={styles.cardImg} src={imgPath} alt="포토카드 이미지" />
            <Card
              className={styles.Card}
              type="buy"
              grade="RARE"
              genre="Fantasy"
              userNickName="John Doe"
            />
          </div>
          <div className={styles.bottomContent}>
            <Title
              className={styles.btnClassName}
              title="교환 희망 정보"
              buttonText="포토 카드 교환하기"
              size="L"
            />
          </div>
          <p className={styles.Message}>{exchangeMessage}</p>
          <div>
            <CardType />
          </div>
        </>
      )}
    </div>
  );
}
