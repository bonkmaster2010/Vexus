import ad1 from '../../images/upscalemedia-transformed.png';
import ad2 from '../../images/microless-ad2.webp';import { useState } from 'react';


function Ad(){
   const [imageIndex, setImageIndex] = useState<number>(0);
   const srcs = [ad1, ad2]

   function left(){
      if(imageIndex <= 0){return}
      setImageIndex((prev) => (prev === 0 ? srcs.length - 1 : prev - 1));
  }

   function right(){
      if (imageIndex >= srcs.length - 1) return; 
      setImageIndex((prev) => (prev === srcs.length - 1 ? 0 : prev + 1));
    }


   return (
    <div className="ad" style={{
    backgroundImage: `url(${srcs[imageIndex]})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    }}>

      <div className='image-dot-cont'>
         {srcs.map((n: any, i: number) => (
            <span className={`image-dot ${imageIndex == i ? "active" : ""}`} key={`${n} - ${i}`}></span>
         ))}
      </div>

      <div className='image-btn-cont'>
         <button onClick={left}>{'❮'}</button>
         <button onClick={right}>{'❯'}</button>
      </div>
   
    </div>
   )
}

export default Ad;