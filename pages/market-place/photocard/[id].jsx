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
  const [photoCardData, setPhotoCardData] = useState([]); //백엔드 연동되면 []없애기
  const [exchangeMessage, setExchangeMessage] = useState('');

  useEffect(() => {
    const PhotoCardData = async () => {
      try {
        const mockData = [
          {
            id: '1',
            grade: 'COMMON',
            genre: '풍경',
            imagePath: 'https://via.placeholder.com/150',
            description: '여름 풍경 사진',
          },
          {
            id: '2',
            grade: 'RARE',
            genre: '여행',
            imagePath: 'https://via.placeholder.com/150',
            description: '여행의 즐거움',
          },
        ];
        setPhotoCardData(mockData);
        setExchangeMessage(mockData[0].description);
      } catch (error) {
        console.error('오류가 발생하였습니다', error);
      }
    };

    //백엔드 연동되면 위에 mock데이터 제거 후 아래 코드 살리기
    //       const response = await axios.get('/api/shop/cards/${shopId}');
    //       setPhotoCardData(response.data);
    // if (response.data.length > 0) {
    //   setExchangeMessage(response.data[0].description);
    // }
    //       const isOwner = response.data.some((card) => card.userId === user.id);
    //       setPageType(isOwner ? 'sell' : 'buy');
    //     } catch (error) {
    //       console.error('오류가 발생하였습니다', error);
    //     }
    //   };

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
            <Image className={styles.cardImg} src={''} alt="포토카드 이미지" />

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
            {photoCardData.slice(0, 2).map((data) => (
              <PhotoCard key={data.id} cardType="exchange" isSoldOut={false} data={data} />
            ))}
          </div>
        </>
      )}

      {Buyer && (
        <>
          <div className={styles.centerContent}>
            <Image className={styles.cardImg} src={''} alt="포토카드 이미지" />
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
