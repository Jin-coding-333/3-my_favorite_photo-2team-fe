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
// import { response } from 'express';

export default function PhotoCardDetails() {
  const { user } = useAuth();
  const [pageType, setPageType] = useState('sell'); //데이터없어서 임시로
  const [photoCardData, setPhotoCardData] = useState();
  const [exchangeMessage, setExchangeMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const PhotoCardData = async () => {
      try {
        const shopId = 3;
        const response = await axios.get(
          'http://localhost:8000/api/shop/cards/3',
        );
        console.log(response.data.card);
        console.log(photoCardData);
        setPhotoCardData(response.data);

        if (response.data.card && Array.isArray(response.data.card)) {
          if (response.data.card.length > 0) {
            setExchangeMessage(response.data.card[0].description);
          }
          const isOwner = response.data.card.some(
            (card) => card.userId === user.id,
          );
          setPageType(isOwner ? 'sell' : 'buy');
        }
      } catch (error) {
        console.error('오류가 발생하였습니다', error);
      } finally {
        setIsLoading(false); // 로딩 상태 해제
      }
    };

    PhotoCardData();
  }, [user]);

  const Buyer = pageType === 'buy';
  const Seller = pageType === 'sell';
  if (isLoading) {
    return <div>로딩 중...</div>; // 로딩 상태 표시
  }

  if (!photoCardData) {
    return <div>데이터를 가져오지 못했습니다.</div>; // 오류 처리
  }
  const imgUrl = photoCardData.card.imagePath;
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>마켓플레이스</h1>
      <Title className={styles.cardDetail} title="우리집 앞마당" size="L" />

      {Seller && (
        <>
          <div className={styles.centerContent}>
            <div
              className={styles.cardImg}
              style={{
                position: 'relative',
              }}
            >
              <Image
                className={styles.cardImg}
                src={imgUrl}
                alt="포토카드 이미지"
                fill
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>

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
                  <PhotoCard
                    key={data.id}
                    cardType="exchange"
                    isSoldOut={false}
                    data={data}
                  />
                ))}
          </div>
        </>
      )}

      {Buyer && (
        <>
          <div className={styles.centerContent}>
            <div
              className={styles.cardImg}
              style={{
                position: 'relative',
              }}
            >
              <Image
                className={styles.cardImg}
                src={imgUrl}
                alt="포토카드 이미지"
                fill
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>

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
          <p className={styles.Message}>{photoCardData.content}</p>
          <div>
            <CardType grade={photoCardData.grade} genre={photoCardData.genre} />
          </div>
        </>
      )}
    </div>
  );
}
