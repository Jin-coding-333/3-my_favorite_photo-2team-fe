const photocards = [
  {
    name: "그림같은 설산과 호수",
    grade: "LEGENDARY",
    genre: "풍경",
    price: 6,
    remainingQuantity: 14,
    totalQuantity: 15,
    description: "그림같은 설산과 호수를 보며 힐링하세요",
    imagePath: "/uploads/image_mount.jpg"
  },
  {
    name: "스페인 풍경",
    grade: "LEGENDARY",
    genre: "여행",
    price: 6,
    remainingQuantity: 4,
    totalQuantity: 10,
    description: "스페인 풍경을 보며 즐겨보세요.",
    imagePath: "/uploads/image3.png"
  },
  {
    name: "해변 노을",
    grade: "COMMON",
    genre: "여행",
    price: 1,
    remainingQuantity: 10,
    totalQuantity: 50,
    description: "해변의 노을을 보며 힐링하세요.",
    imagePath: "/uploads/image2.png"
  },
  {
    name: "우리집 앞 풍경",
    grade: "RARE",
    genre: "풍경",
    price: 2,
    remainingQuantity: 8,
    totalQuantity: 20,
    description: "우리집 앞의 풍경을 보세요.",
    imagePath: "/uploads/image1.png"
  },
  {
    name: "몽골의 사막 여행",
    grade: "RARE",
    genre: "여행",
    price: 1,
    remainingQuantity: 10,
    totalQuantity: 50,
    description: "광활한 몽골의 사막을 여행하며 느끼는 대자연의 풍경.",
    imagePath: "/uploads/몽골사막.jpg"
  },
  {
    name: "알프스 설산 풍경",
    grade: "LEGENDARY",
    genre: "풍경",
    price: 5,
    remainingQuantity: 5,
    totalQuantity: 30,
    description: "눈 덮인 알프스 산맥의 장엄한 풍경을 담은 작품.",
    imagePath: "/uploads/알프스설산.jpg"
  },
  {
    name: "미소",
    grade: "COMMON",
    genre: "인물",
    price: 1,
    remainingQuantity: 15,
    totalQuantity: 40,
    description: "한 여성의 따뜻한 미소를 담은 생동감 있는 초상화.",
    imagePath: "/uploads/미소.jpeg"
  },
  {
    name: "고대 항아리",
    grade: "LEGENDARY",
    genre: "사물",
    price: 3,
    remainingQuantity: 8,
    totalQuantity: 20,
    description: "수천 년의 역사를 간직한 고대 항아리.",
    imagePath: "/uploads/항아리.jpg"
  },
  {
    name: "유럽 기차 여행",
    grade: "RARE",
    genre: "여행",
    price: 8,
    remainingQuantity: 20,
    totalQuantity: 60,
    description: "유럽의 아름다운 시골 풍경을 즐길 수 있는 기차 여행.",
    imagePath: "/uploads/기차여행.jpg"
  },
  {
    name: "해변의 일몰",
    grade: "COMMON",
    genre: "풍경",
    price: 1,
    remainingQuantity: 7,
    totalQuantity: 25,
    description: "바다 위로 물드는 황금빛 일몰의 장관.",
    imagePath: "/uploads/해변일몰.jpg"
  },
  {
    name: "전사의 초상",
    grade: "COMMON",
    genre: "인물",
    price: 3,
    remainingQuantity: 50,
    totalQuantity: 100,
    description: "투구를 쓴 용맹한 전사의 초상화.",
    imagePath: "/uploads/전사초상.jpg"
  },
  {
    name: "고대 금목걸이",
    grade: "LEGENDARY",
    genre: "사물",
    price: 4,
    remainingQuantity: 3,
    totalQuantity: 10,
    description: "귀족들이 착용했던 정교한 디자인의 고대 금목걸이.",
    imagePath: "/uploads/고대목걸이.jpg"
  },
  {
    name: "히말라야 등산",
    grade: "RARE",
    genre: "여행",
    price: 2,
    remainingQuantity: 12,
    totalQuantity: 30,
    description: "히말라야 산맥을 따라 펼쳐지는 모험과 도전.",
    imagePath: "/uploads/히말라야등산.jpg"
  },
  {
    name: "대나무 숲의 아침",
    grade: "COMMON",
    genre: "풍경",
    price: 1,
    remainingQuantity: 9,
    totalQuantity: 35,
    description: "이른 아침 안개 속 대나무 숲의 평온한 모습.",
    imagePath: "/uploads/대나무.jpg"
  },
  {
    name: "페루 마추픽추",
    grade: "LEGENDARY",
    genre: "여행",
    price: 5,
    remainingQuantity: 6,
    totalQuantity: 20,
    description: "고대 잉카 문명의 흔적이 남아 있는 마추픽추를 탐험하다.",
    imagePath: "/uploads/마추픽추.jpg"
  },
  {
    name: "폭포의 신비",
    grade: "SUPER RARE",
    genre: "풍경",
    price: 2,
    remainingQuantity: 15,
    totalQuantity: 50,
    description: "맑은 물이 굉음을 내며 떨어지는 장엄한 폭포의 모습.",
    imagePath: "/uploads/신비폭포.jpg"
  },
  {
    name: "왕의 초상화",
    grade: "RARE",
    genre: "인물",
    price: 3,
    remainingQuantity: 25,
    totalQuantity: 70,
    description: "왕의 기품과 위엄을 담아낸 역사적인 초상화.",
    imagePath: "/uploads/세종대왕.jpg"
  },
  {
    name: "고대의 청동 거울",
    grade: "COMMON",
    genre: "사물",
    price: 1,
    remainingQuantity: 40,
    totalQuantity: 100,
    description: "고대 사람들이 사용했던 정교하게 만든 청동 거울.",
    imagePath: "/uploads/청동거울.jpg"
  },
  {
    name: "태국 방콕 여행",
    grade: "RARE",
    genre: "여행",
    price: 2,
    remainingQuantity: 18,
    totalQuantity: 45,
    description: "태국의 활기찬 수도 방콕에서 만나는 문화와 음식의 향연.",
    imagePath: "/uploads/방콕.jpg"
  },
  {
    name: "산맥의 노을",
    grade: "LEGENDARY",
    genre: "풍경",
    price: 6,
    remainingQuantity: 7,
    totalQuantity: 20,
    description: "멀리 펼쳐진 산맥 위로 붉게 물드는 노을의 장면.",
    imagePath: "/uploads/산맥노을.jpg"
  },
  {
    name: "천재 화가의 자화상",
    grade: "SUPER RARE",
    genre: "인물",
    price: 4,
    remainingQuantity: 12,
    totalQuantity: 35,
    description: "전설적인 화가가 남긴 자신을 담은 자화상.",
    imagePath: "/uploads/자화상.jpg"
  },
  {
    name: "고대 장군의 검",
    grade: "RARE",
    genre: "사물",
    price: 3,
    remainingQuantity: 20,
    totalQuantity: 60,
    description: "고대 전쟁을 승리로 이끈 장군의 검.",
    imagePath: "/uploads/고대검.jpg"
  },
  {
    name: "아이슬란드 오로라 여행",
    grade: "LEGENDARY",
    genre: "여행",
    price: 8,
    remainingQuantity: 5,
    totalQuantity: 25,
    description: "아이슬란드의 밤하늘에서 펼쳐지는 황홀한 오로라 체험.",
    imagePath: "/uploads/오로라.jpg"
  },
  {
    name: "구름 위의 정원",
    grade: "SUPER RARE",
    genre: "풍경",
    price: 2,
    remainingQuantity: 10,
    totalQuantity: 40,
    description: "구름 위에 자리한 듯한 고요하고 평화로운 정원의 풍경.",
    imagePath: "/uploads/구름정원.jpg"
  },
  {
    name: "그림같은 설산과 호수",
    grade: "LEGENDARY",
    genre: "풍경",
    price: 6,
    remainingQuantity: 14,
    totalQuantity: 15,
    description: "그림같은 설산과 호수를 보며 힐링하세요",
    imagePath: "/uploads/image_mount.jpg"
  },
  {
    name: "스페인 풍경",
    grade: "LEGENDARY",
    genre: "여행",
    price: 6,
    remainingQuantity: 4,
    totalQuantity: 10,
    description: "스페인 풍경을 보며 즐겨보세요.",
    imagePath: "/uploads/image3.png"
  },
  {
    name: "해변 노을",
    grade: "COMMON",
    genre: "여행",
    price: 1,
    remainingQuantity: 10,
    totalQuantity: 50,
    description: "해변의 노을을 보며 힐링하세요.",
    imagePath: "/uploads/image2.png"
  },
  {
    name: "우리집 앞 풍경",
    grade: "RARE",
    genre: "풍경",
    price: 2,
    remainingQuantity: 8,
    totalQuantity: 20,
    description: "우리집 앞의 풍경을 보세요.",
    imagePath: "/uploads/image1.png"
  },
  {
    name: "몽골의 사막 여행",
    grade: "RARE",
    genre: "여행",
    price: 1,
    remainingQuantity: 10,
    totalQuantity: 50,
    description: "광활한 몽골의 사막을 여행하며 느끼는 대자연의 풍경.",
    imagePath: "/uploads/몽골사막.jpg"
  },
  {
    name: "알프스 설산 풍경",
    grade: "LEGENDARY",
    genre: "풍경",
    price: 5,
    remainingQuantity: 5,
    totalQuantity: 30,
    description: "눈 덮인 알프스 산맥의 장엄한 풍경을 담은 작품.",
    imagePath: "/uploads/알프스설산.jpg"
  },
  {
    name: "미소",
    grade: "COMMON",
    genre: "인물",
    price: 1,
    remainingQuantity: 15,
    totalQuantity: 40,
    description: "한 여성의 따뜻한 미소를 담은 생동감 있는 초상화.",
    imagePath: "/uploads/미소.jpeg"
  },
  {
    name: "고대 항아리",
    grade: "LEGENDARY",
    genre: "사물",
    price: 3,
    remainingQuantity: 8,
    totalQuantity: 20,
    description: "수천 년의 역사를 간직한 고대 항아리.",
    imagePath: "/uploads/항아리.jpg"
  },
  {
    name: "유럽 기차 여행",
    grade: "RARE",
    genre: "여행",
    price: 8,
    remainingQuantity: 20,
    totalQuantity: 60,
    description: "유럽의 아름다운 시골 풍경을 즐길 수 있는 기차 여행.",
    imagePath: "/uploads/기차여행.jpg"
  },
  {
    name: "해변의 일몰",
    grade: "COMMON",
    genre: "풍경",
    price: 1,
    remainingQuantity: 7,
    totalQuantity: 25,
    description: "바다 위로 물드는 황금빛 일몰의 장관.",
    imagePath: "/uploads/해변일몰.jpg"
  },
  {
    name: "전사의 초상",
    grade: "COMMON",
    genre: "인물",
    price: 3,
    remainingQuantity: 50,
    totalQuantity: 100,
    description: "투구를 쓴 용맹한 전사의 초상화.",
    imagePath: "/uploads/전사초상.jpg"
  },
  {
    name: "고대 금목걸이",
    grade: "LEGENDARY",
    genre: "사물",
    price: 4,
    remainingQuantity: 3,
    totalQuantity: 10,
    description: "귀족들이 착용했던 정교한 디자인의 고대 금목걸이.",
    imagePath: "/uploads/고대목걸이.jpg"
  },
  {
    name: "히말라야 등산",
    grade: "RARE",
    genre: "여행",
    price: 2,
    remainingQuantity: 12,
    totalQuantity: 30,
    description: "히말라야 산맥을 따라 펼쳐지는 모험과 도전.",
    imagePath: "/uploads/히말라야등산.jpg"
  },
  {
    name: "대나무 숲의 아침",
    grade: "COMMON",
    genre: "풍경",
    price: 1,
    remainingQuantity: 9,
    totalQuantity: 35,
    description: "이른 아침 안개 속 대나무 숲의 평온한 모습.",
    imagePath: "/uploads/대나무.jpg"
  },
  {
    name: "페루 마추픽추",
    grade: "LEGENDARY",
    genre: "여행",
    price: 5,
    remainingQuantity: 6,
    totalQuantity: 20,
    description: "고대 잉카 문명의 흔적이 남아 있는 마추픽추를 탐험하다.",
    imagePath: "/uploads/마추픽추.jpg"
  },
  {
    name: "폭포의 신비",
    grade: "SUPER RARE",
    genre: "풍경",
    price: 2,
    remainingQuantity: 15,
    totalQuantity: 50,
    description: "맑은 물이 굉음을 내며 떨어지는 장엄한 폭포의 모습.",
    imagePath: "/uploads/신비폭포.jpg"
  },
  {
    name: "왕의 초상화",
    grade: "RARE",
    genre: "인물",
    price: 3,
    remainingQuantity: 25,
    totalQuantity: 70,
    description: "왕의 기품과 위엄을 담아낸 역사적인 초상화.",
    imagePath: "/uploads/세종대왕.jpg"
  },
  {
    name: "고대의 청동 거울",
    grade: "COMMON",
    genre: "사물",
    price: 1,
    remainingQuantity: 40,
    totalQuantity: 100,
    description: "고대 사람들이 사용했던 정교하게 만든 청동 거울.",
    imagePath: "/uploads/청동거울.jpg"
  },
  {
    name: "태국 방콕 여행",
    grade: "RARE",
    genre: "여행",
    price: 2,
    remainingQuantity: 18,
    totalQuantity: 45,
    description: "태국의 활기찬 수도 방콕에서 만나는 문화와 음식의 향연.",
    imagePath: "/uploads/방콕.jpg"
  },
  {
    name: "산맥의 노을",
    grade: "LEGENDARY",
    genre: "풍경",
    price: 6,
    remainingQuantity: 7,
    totalQuantity: 20,
    description: "멀리 펼쳐진 산맥 위로 붉게 물드는 노을의 장면.",
    imagePath: "/uploads/산맥노을.jpg"
  },
  {
    name: "천재 화가의 자화상",
    grade: "SUPER RARE",
    genre: "인물",
    price: 4,
    remainingQuantity: 12,
    totalQuantity: 35,
    description: "전설적인 화가가 남긴 자신을 담은 자화상.",
    imagePath: "/uploads/자화상.jpg"
  },
  {
    name: "고대 장군의 검",
    grade: "RARE",
    genre: "사물",
    price: 3,
    remainingQuantity: 20,
    totalQuantity: 60,
    description: "고대 전쟁을 승리로 이끈 장군의 검.",
    imagePath: "/uploads/고대검.jpg"
  },
  {
    name: "아이슬란드 오로라 여행",
    grade: "LEGENDARY",
    genre: "여행",
    price: 8,
    remainingQuantity: 5,
    totalQuantity: 25,
    description: "아이슬란드의 밤하늘에서 펼쳐지는 황홀한 오로라 체험.",
    imagePath: "/uploads/오로라.jpg"
  },
  {
    name: "구름 위의 정원",
    grade: "SUPER RARE",
    genre: "풍경",
    price: 2,
    remainingQuantity: 10,
    totalQuantity: 40,
    description: "구름 위에 자리한 듯한 고요하고 평화로운 정원의 풍경.",
    imagePath: "/uploads/구름정원.jpg"
  },
  
  {
    name: "그림같은 설산과 호수",
    grade: "LEGENDARY",
    genre: "풍경",
    price: 6,
    remainingQuantity: 14,
    totalQuantity: 15,
    description: "그림같은 설산과 호수를 보며 힐링하세요",
    imagePath: "/uploads/image_mount.jpg"
  },
  {
    name: "스페인 풍경",
    grade: "LEGENDARY",
    genre: "여행",
    price: 6,
    remainingQuantity: 4,
    totalQuantity: 10,
    description: "스페인 풍경을 보며 즐겨보세요.",
    imagePath: "/uploads/image3.png"
  },
  {
    name: "해변 노을",
    grade: "COMMON",
    genre: "여행",
    price: 1,
    remainingQuantity: 10,
    totalQuantity: 50,
    description: "해변의 노을을 보며 힐링하세요.",
    imagePath: "/uploads/image2.png"
  },
  {
    name: "우리집 앞 풍경",
    grade: "RARE",
    genre: "풍경",
    price: 2,
    remainingQuantity: 8,
    totalQuantity: 20,
    description: "우리집 앞의 풍경을 보세요.",
    imagePath: "/uploads/image1.png"
  },
  {
    name: "몽골의 사막 여행",
    grade: "RARE",
    genre: "여행",
    price: 1,
    remainingQuantity: 10,
    totalQuantity: 50,
    description: "광활한 몽골의 사막을 여행하며 느끼는 대자연의 풍경.",
    imagePath: "/uploads/몽골사막.jpg"
  },
  {
    name: "알프스 설산 풍경",
    grade: "LEGENDARY",
    genre: "풍경",
    price: 5,
    remainingQuantity: 5,
    totalQuantity: 30,
    description: "눈 덮인 알프스 산맥의 장엄한 풍경을 담은 작품.",
    imagePath: "/uploads/알프스설산.jpg"
  },
  {
    name: "미소",
    grade: "COMMON",
    genre: "인물",
    price: 1,
    remainingQuantity: 15,
    totalQuantity: 40,
    description: "한 여성의 따뜻한 미소를 담은 생동감 있는 초상화.",
    imagePath: "/uploads/미소.jpeg"
  },
  {
    name: "고대 항아리",
    grade: "LEGENDARY",
    genre: "사물",
    price: 3,
    remainingQuantity: 8,
    totalQuantity: 20,
    description: "수천 년의 역사를 간직한 고대 항아리.",
    imagePath: "/uploads/항아리.jpg"
  },
  {
    name: "유럽 기차 여행",
    grade: "RARE",
    genre: "여행",
    price: 8,
    remainingQuantity: 20,
    totalQuantity: 60,
    description: "유럽의 아름다운 시골 풍경을 즐길 수 있는 기차 여행.",
    imagePath: "/uploads/기차여행.jpg"
  },
  {
    name: "해변의 일몰",
    grade: "COMMON",
    genre: "풍경",
    price: 1,
    remainingQuantity: 7,
    totalQuantity: 25,
    description: "바다 위로 물드는 황금빛 일몰의 장관.",
    imagePath: "/uploads/해변일몰.jpg"
  },
  {
    name: "전사의 초상",
    grade: "COMMON",
    genre: "인물",
    price: 3,
    remainingQuantity: 50,
    totalQuantity: 100,
    description: "투구를 쓴 용맹한 전사의 초상화.",
    imagePath: "/uploads/전사초상.jpg"
  },
  {
    name: "고대 금목걸이",
    grade: "LEGENDARY",
    genre: "사물",
    price: 4,
    remainingQuantity: 3,
    totalQuantity: 10,
    description: "귀족들이 착용했던 정교한 디자인의 고대 금목걸이.",
    imagePath: "/uploads/고대목걸이.jpg"
  },
  {
    name: "히말라야 등산",
    grade: "RARE",
    genre: "여행",
    price: 2,
    remainingQuantity: 12,
    totalQuantity: 30,
    description: "히말라야 산맥을 따라 펼쳐지는 모험과 도전.",
    imagePath: "/uploads/히말라야등산.jpg"
  },
  {
    name: "대나무 숲의 아침",
    grade: "COMMON",
    genre: "풍경",
    price: 1,
    remainingQuantity: 9,
    totalQuantity: 35,
    description: "이른 아침 안개 속 대나무 숲의 평온한 모습.",
    imagePath: "/uploads/대나무.jpg"
  },
  {
    name: "페루 마추픽추",
    grade: "LEGENDARY",
    genre: "여행",
    price: 5,
    remainingQuantity: 6,
    totalQuantity: 20,
    description: "고대 잉카 문명의 흔적이 남아 있는 마추픽추를 탐험하다.",
    imagePath: "/uploads/마추픽추.jpg"
  },
  {
    name: "폭포의 신비",
    grade: "SUPER RARE",
    genre: "풍경",
    price: 2,
    remainingQuantity: 15,
    totalQuantity: 50,
    description: "맑은 물이 굉음을 내며 떨어지는 장엄한 폭포의 모습.",
    imagePath: "/uploads/신비폭포.jpg"
  },
  {
    name: "왕의 초상화",
    grade: "RARE",
    genre: "인물",
    price: 3,
    remainingQuantity: 25,
    totalQuantity: 70,
    description: "왕의 기품과 위엄을 담아낸 역사적인 초상화.",
    imagePath: "/uploads/세종대왕.jpg"
  },
  {
    name: "고대의 청동 거울",
    grade: "COMMON",
    genre: "사물",
    price: 1,
    remainingQuantity: 40,
    totalQuantity: 100,
    description: "고대 사람들이 사용했던 정교하게 만든 청동 거울.",
    imagePath: "/uploads/청동거울.jpg"
  },
  {
    name: "태국 방콕 여행",
    grade: "RARE",
    genre: "여행",
    price: 2,
    remainingQuantity: 18,
    totalQuantity: 45,
    description: "태국의 활기찬 수도 방콕에서 만나는 문화와 음식의 향연.",
    imagePath: "/uploads/방콕.jpg"
  },
  {
    name: "산맥의 노을",
    grade: "LEGENDARY",
    genre: "풍경",
    price: 6,
    remainingQuantity: 7,
    totalQuantity: 20,
    description: "멀리 펼쳐진 산맥 위로 붉게 물드는 노을의 장면.",
    imagePath: "/uploads/산맥노을.jpg"
  },
  {
    name: "천재 화가의 자화상",
    grade: "SUPER RARE",
    genre: "인물",
    price: 4,
    remainingQuantity: 12,
    totalQuantity: 35,
    description: "전설적인 화가가 남긴 자신을 담은 자화상.",
    imagePath: "/uploads/자화상.jpg"
  },
  {
    name: "고대 장군의 검",
    grade: "RARE",
    genre: "사물",
    price: 3,
    remainingQuantity: 20,
    totalQuantity: 60,
    description: "고대 전쟁을 승리로 이끈 장군의 검.",
    imagePath: "/uploads/고대검.jpg"
  },
  {
    name: "아이슬란드 오로라 여행",
    grade: "LEGENDARY",
    genre: "여행",
    price: 8,
    remainingQuantity: 5,
    totalQuantity: 25,
    description: "아이슬란드의 밤하늘에서 펼쳐지는 황홀한 오로라 체험.",
    imagePath: "/uploads/오로라.jpg"
  },
  {
    name: "구름 위의 정원",
    grade: "SUPER RARE",
    genre: "풍경",
    price: 2,
    remainingQuantity: 10,
    totalQuantity: 40,
    description: "구름 위에 자리한 듯한 고요하고 평화로운 정원의 풍경.",
    imagePath: "/uploads/구름정원.jpg"
  },
  {
    name: "그림같은 설산과 호수",
    grade: "LEGENDARY",
    genre: "풍경",
    price: 6,
    remainingQuantity: 14,
    totalQuantity: 15,
    description: "그림같은 설산과 호수를 보며 힐링하세요",
    imagePath: "/uploads/image_mount.jpg"
  },
  {
    name: "스페인 풍경",
    grade: "LEGENDARY",
    genre: "여행",
    price: 6,
    remainingQuantity: 4,
    totalQuantity: 10,
    description: "스페인 풍경을 보며 즐겨보세요.",
    imagePath: "/uploads/image3.png"
  },
  {
    name: "해변 노을",
    grade: "COMMON",
    genre: "여행",
    price: 1,
    remainingQuantity: 10,
    totalQuantity: 50,
    description: "해변의 노을을 보며 힐링하세요.",
    imagePath: "/uploads/image2.png"
  },
  {
    name: "우리집 앞 풍경",
    grade: "RARE",
    genre: "풍경",
    price: 2,
    remainingQuantity: 8,
    totalQuantity: 20,
    description: "우리집 앞의 풍경을 보세요.",
    imagePath: "/uploads/image1.png"
  },
  {
    name: "몽골의 사막 여행",
    grade: "RARE",
    genre: "여행",
    price: 1,
    remainingQuantity: 10,
    totalQuantity: 50,
    description: "광활한 몽골의 사막을 여행하며 느끼는 대자연의 풍경.",
    imagePath: "/uploads/몽골사막.jpg"
  },
  {
    name: "알프스 설산 풍경",
    grade: "LEGENDARY",
    genre: "풍경",
    price: 5,
    remainingQuantity: 5,
    totalQuantity: 30,
    description: "눈 덮인 알프스 산맥의 장엄한 풍경을 담은 작품.",
    imagePath: "/uploads/알프스설산.jpg"
  },
  {
    name: "미소",
    grade: "COMMON",
    genre: "인물",
    price: 1,
    remainingQuantity: 15,
    totalQuantity: 40,
    description: "한 여성의 따뜻한 미소를 담은 생동감 있는 초상화.",
    imagePath: "/uploads/미소.jpeg"
  },
  {
    name: "고대 항아리",
    grade: "LEGENDARY",
    genre: "사물",
    price: 3,
    remainingQuantity: 8,
    totalQuantity: 20,
    description: "수천 년의 역사를 간직한 고대 항아리.",
    imagePath: "/uploads/항아리.jpg"
  },
  {
    name: "유럽 기차 여행",
    grade: "RARE",
    genre: "여행",
    price: 8,
    remainingQuantity: 20,
    totalQuantity: 60,
    description: "유럽의 아름다운 시골 풍경을 즐길 수 있는 기차 여행.",
    imagePath: "/uploads/기차여행.jpg"
  },
  {
    name: "해변의 일몰",
    grade: "COMMON",
    genre: "풍경",
    price: 1,
    remainingQuantity: 7,
    totalQuantity: 25,
    description: "바다 위로 물드는 황금빛 일몰의 장관.",
    imagePath: "/uploads/해변일몰.jpg"
  },
  {
    name: "전사의 초상",
    grade: "COMMON",
    genre: "인물",
    price: 3,
    remainingQuantity: 50,
    totalQuantity: 100,
    description: "투구를 쓴 용맹한 전사의 초상화.",
    imagePath: "/uploads/전사초상.jpg"
  },
  {
    name: "고대 금목걸이",
    grade: "LEGENDARY",
    genre: "사물",
    price: 4,
    remainingQuantity: 3,
    totalQuantity: 10,
    description: "귀족들이 착용했던 정교한 디자인의 고대 금목걸이.",
    imagePath: "/uploads/고대목걸이.jpg"
  },
  {
    name: "히말라야 등산",
    grade: "RARE",
    genre: "여행",
    price: 2,
    remainingQuantity: 12,
    totalQuantity: 30,
    description: "히말라야 산맥을 따라 펼쳐지는 모험과 도전.",
    imagePath: "/uploads/히말라야등산.jpg"
  },
  {
    name: "대나무 숲의 아침",
    grade: "COMMON",
    genre: "풍경",
    price: 1,
    remainingQuantity: 9,
    totalQuantity: 35,
    description: "이른 아침 안개 속 대나무 숲의 평온한 모습.",
    imagePath: "/uploads/대나무.jpg"
  },
  {
    name: "페루 마추픽추",
    grade: "LEGENDARY",
    genre: "여행",
    price: 5,
    remainingQuantity: 6,
    totalQuantity: 20,
    description: "고대 잉카 문명의 흔적이 남아 있는 마추픽추를 탐험하다.",
    imagePath: "/uploads/마추픽추.jpg"
  },
  {
    name: "폭포의 신비",
    grade: "SUPER RARE",
    genre: "풍경",
    price: 2,
    remainingQuantity: 15,
    totalQuantity: 50,
    description: "맑은 물이 굉음을 내며 떨어지는 장엄한 폭포의 모습.",
    imagePath: "/uploads/신비폭포.jpg"
  },
  {
    name: "왕의 초상화",
    grade: "RARE",
    genre: "인물",
    price: 3,
    remainingQuantity: 25,
    totalQuantity: 70,
    description: "왕의 기품과 위엄을 담아낸 역사적인 초상화.",
    imagePath: "/uploads/세종대왕.jpg"
  },
  {
    name: "고대의 청동 거울",
    grade: "COMMON",
    genre: "사물",
    price: 1,
    remainingQuantity: 40,
    totalQuantity: 100,
    description: "고대 사람들이 사용했던 정교하게 만든 청동 거울.",
    imagePath: "/uploads/청동거울.jpg"
  },
  {
    name: "태국 방콕 여행",
    grade: "RARE",
    genre: "여행",
    price: 2,
    remainingQuantity: 18,
    totalQuantity: 45,
    description: "태국의 활기찬 수도 방콕에서 만나는 문화와 음식의 향연.",
    imagePath: "/uploads/방콕.jpg"
  },
  {
    name: "산맥의 노을",
    grade: "LEGENDARY",
    genre: "풍경",
    price: 6,
    remainingQuantity: 7,
    totalQuantity: 20,
    description: "멀리 펼쳐진 산맥 위로 붉게 물드는 노을의 장면.",
    imagePath: "/uploads/산맥노을.jpg"
  },
  {
    name: "천재 화가의 자화상",
    grade: "SUPER RARE",
    genre: "인물",
    price: 4,
    remainingQuantity: 12,
    totalQuantity: 35,
    description: "전설적인 화가가 남긴 자신을 담은 자화상.",
    imagePath: "/uploads/자화상.jpg"
  },
  {
    name: "고대 장군의 검",
    grade: "RARE",
    genre: "사물",
    price: 3,
    remainingQuantity: 20,
    totalQuantity: 60,
    description: "고대 전쟁을 승리로 이끈 장군의 검.",
    imagePath: "/uploads/고대검.jpg"
  },
  {
    name: "아이슬란드 오로라 여행",
    grade: "LEGENDARY",
    genre: "여행",
    price: 8,
    remainingQuantity: 5,
    totalQuantity: 25,
    description: "아이슬란드의 밤하늘에서 펼쳐지는 황홀한 오로라 체험.",
    imagePath: "/uploads/오로라.jpg"
  },
  {
    name: "구름 위의 정원",
    grade: "SUPER RARE",
    genre: "풍경",
    price: 2,
    remainingQuantity: 10,
    totalQuantity: 40,
    description: "구름 위에 자리한 듯한 고요하고 평화로운 정원의 풍경.",
    imagePath: "/uploads/구름정원.jpg"
  },
];

export default photocards;
