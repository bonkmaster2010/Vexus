import { useState } from 'react';
import ad1 from '../images/PcAd1.png';

function Ad(){
   const [imageIndex, setImageIndex] = useState<number>(0);
   const srcs = [ad1]

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
    background: `url(${srcs[imageIndex]})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
    }}>

      <div className='image-dot-cont'>
         {srcs.map((n: any, i: number) => (
            <span className='image-dot' key={`${n} - ${i}`}></span>
         ))}
      </div>

      <div className='image-btn-cont'>
         <button>{'❮'}</button>
         <button>{'❯'}</button>
      </div>
   
    </div>
   )
}

export default Ad;