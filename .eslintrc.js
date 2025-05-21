module.exports = {
  extends: 'next',
  rules: {
    // 따옴표 규칙 비활성화
    quotes: 'off',
    // 들여쓰기 규칙 비활성화
    indent: 'off',
    // 세미콜론 규칙 비활성화
    semi: 'off',
    // 중복 부정 규칙 비활성화
    'no-extra-boolean-cast': 'off',
    // 빈 객체 패턴 규칙 비활성화
    'no-empty-pattern': 'off',
    // 정의되지 않은 변수 규칙 비활성화
    'no-undef': 'warn',
  },
};
