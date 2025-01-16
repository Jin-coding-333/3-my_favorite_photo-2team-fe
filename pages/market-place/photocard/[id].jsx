import { useState, useEffect } from 'react';
import axios from 'axios';
import Title from '@/components/title/Title.jsx';
import styles from '@/styles/components/photoCard/PhotoCardBuyer.module.css';
import Card from '@/components/card/Card.jsx';
import PhotoCard from '@/components/card/photoCard/PhotoCard.jsx';
import { Title as CardType } from '@/components/card/Card.Component.jsx';
import { useAuth } from '@/contexts/AuthProvier';

export default function UnifiedPage({ pageType = 'buy', PhotoMockData = '' }) {
  const isBuyer = pageType === 'buy';
  const isSeller = pageType === 'sell';
  const { user } = useAuth();
  console.log(user);
  const photoData = PhotoMockData || [
    {
      title: '우리집 앞마당',
      user: '미쓰손',
      grade: 'RARE',
      genre: '여행',
      price: '4',
      count: '2',
      exchangeMessage: '스페인 여행 사진도 좋은데.. 우리집 앞마당 포토카드와 교환하고 싶습니다!',
    },
    {
      title: '스페인 여행',
      user: '김여행',
      grade: 'COMMON',
      genre: '여행',
      price: '2',
      count: '1',
      exchangeMessage: '유럽풍의 사진도 좋아 보이네요!',
    },
    {
      title: '눈 내린 풍경',
      user: '박겨울',
      grade: 'LEGENDARY',
      genre: '풍경',
      price: '6',
      count: '3',
      exchangeMessage: '겨울의 눈 덮인 풍경과 잘 어울릴 것 같습니다.',
    },
    {
      title: '추가 카드',
      user: '유저1',
      grade: 'EPIC',
      genre: '풍경',
      price: '3',
      count: '2',
      exchangeMessage: '다른 풍경 사진도 매력적이네요!',
    },
  ];

  const exchangeMessage = '푸릇푸릇한 여름 풍경, 눈 많이 내린 겨울 풍경 사진에 관심이 많습니다.';

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>마켓플레이스</h1>
      <Title className={styles.cardDetail} title="우리집 앞마당" size="L" />

      {isSeller && (
        <>
          <div className={styles.centerContent}>
            <img className={styles.cardImg} src="#" alt="포토카드 이미지" />
            <Card
              className={styles.Card}
              type="sell"
              grade="RARE"
              genre="Fantasy"
              userNickName="John Doe"
            />
          </div>
          <Title className={styles.title} title="교환 제시 목록" size="L" />
          <div className={styles.Tradelist}>
            {photoData.slice(0, 3).map((data, index) => (
              <PhotoCard key={index} cardType="exchange" isSoldOut={false} data={data} />
            ))}
          </div>
        </>
      )}

      {isBuyer && (
        <>
          <div className={styles.centerContent}>
            <img className={styles.cardImg} src="#" alt="포토카드 이미지" />
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
