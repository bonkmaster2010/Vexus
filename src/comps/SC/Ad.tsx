import { useState } from 'react';
import ad1 from '../../images/ads/upscalemedia-transformed.png';
import ad2 from '../../images/ads/microless-ad2.webp';
import ad3 from '../../images/ads/microless-gl-ad3.jpg';
import ad4 from '../../images/ads/microless-ad4.webp';

function Ad() {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const srcs = [ad1, ad2, ad3, ad4];
   function left() {
   setImageIndex((prev) => (prev === 0 ? srcs.length - 1 : prev - 1));
   }

   function right() {
   setImageIndex((prev) => (prev === srcs.length - 1 ? 0 : prev + 1));
   }


  return (
    <div className="ad">
      <img src={srcs[imageIndex]} alt={`Ad ${imageIndex + 1}`} />

      <div className="image-dot-cont">
        {srcs.map((n, i) => (
          <span
            className={`image-dot ${imageIndex === i ? 'active' : ''}`}
            key={`${n}-${i}`}
            onClick={() => setImageIndex(i)}
          ></span>
        ))}
      </div>

      <div className="image-btn-cont">
        <button onClick={left}>{'❮'}</button>
        <button onClick={right}>{'❯'}</button>
      </div>
    </div>
  );
}

export default Ad;
