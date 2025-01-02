import Image from 'next/image';
import { useState } from 'react';
/**
 * Image 태그와 동일하지만 hover 기능을 넣었음
 * @param src img path
 * @param src2 hover img path
 * @param alt img alt
 * @param width width
 * @param height height
 * @returns <Image /> next/image
 */
export default function ImgHover({ src, src2, alt, width, height, className }) {
  const [imgPath, setImgPath] = useState(src);
  const mouseEnterHandle = (e) => {
    setImgPath(src2);
  };
  const mouseLeaveHandle = (e) => {
    setImgPath(src);
  };
  if (!src2) throw new Error('src2를 넣어주세요');
  return (
    <Image
      onMouseEnter={mouseEnterHandle}
      onMouseLeave={mouseLeaveHandle}
      className={className}
      src={imgPath}
      alt={alt}
      width={width}
      height={height}
    />
  );
}
