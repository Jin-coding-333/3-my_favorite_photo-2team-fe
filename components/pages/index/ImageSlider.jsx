import React from 'react';
import Slider from 'react-slick';
import styles from '@/styles/pages/index/HomePage.module.css';
import Image from 'next/image';

const ImageSlider = () => {
  const images = [
    '/img/image1.png',
    '/img/image2.png',
    '/img/image3.png',
    '/img/image_mount.jpg',
  ];

  // react-slick의 설정
  const settings = {
    infinite: true,       // 무한 반복
    speed: 3000,          // 슬라이드 이동 속도 (물 흐르듯이 부드럽게)
    autoplay: true,       // 자동 재생
    autoplaySpeed: 0,     // 자동 재생 속도 0으로 설정하여 무한히 연속
    cssEase: 'linear',    // 부드러운 애니메이션을 위한 linear easing
    slidesToShow: 5,      // 한 번에 보여줄 슬라이드 수 (3개로 설정)
    slidesToScroll: 1,    // 한 번에 한 슬라이드씩 이동
    arrows: false,        // 화살표 버튼 비활성화
    dots: false,          // 하단 점 표시 비활성화
    centerMode: true,     // 중앙 정렬 모드 활성화
    focusOnSelect: true,  // 클릭한 슬라이드에 초점 맞추기
    pauseOnHover: false,  // 마우스 호버 시 일시 정지 비활성화
    draggable: true,      // 슬라이드 드래그 가능
    initialSlide: 0,      // 처음 표시할 슬라이드 설정
  };

  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className={styles.slide}>
            <img src={src} alt={`Photo ${index + 1}`} />
          </div>
        ))}
        {/* 슬라이드 복제본 */}
        {images.map((src, index) => (
          <div key={`copy-${index}`} className={styles.slide}>
            <Image
              src={src}
              alt={`Photo Copy ${index + 1}`}
              width={500}
              height={500}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
