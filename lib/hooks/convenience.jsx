/**
 * 첫 글자 대문자로 변환
 * @param {string} str string
 * @returns String
 */
export function useFirstUpperCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
