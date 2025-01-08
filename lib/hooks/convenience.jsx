/** 이곳에는 편의성 기능들 hook 을 작성해주세요 */

/**
 * 첫 글자 대문자로 변환
 * @param {string} str string
 * @returns String
 */
export function useFirstUpperCase(str) {
  return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1);
}
