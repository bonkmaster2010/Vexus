import ad1 from '../../images/ads/wacom-pc-microless-ad.jpg';
import ad3 from '../../images/ads/microless-gl-ad3.jpg';
import ad4 from '../../images/ads/microless-ad4.webp';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useFiltersWithQuery } from '../hooks/useFilterWithQuery';

function Ad() {
  // Variables
  const [imageIndex, setImageIndex] = useState<number>(0);
  const { updateFilter } = useFiltersWithQuery();
  const srcs = [
    {src: ad1}, 
    {src: ad3, type: 'gaming', route: 'category/laptops'}, 
    {src: ad4}];
  const navi = useNavigate();
  
  // uses the update filter function and also navigates
  function handleRouting(id: string, route: string, filterType?: 'specs' | 'types' | 'manufacturers') {
    const updatedParams = updateFilter(filterType ? filterType : "types", id);
    navi(`/${route}?${updatedParams.toString()}`);
  };

   // gets the prev ad image
   function left(e: any) {
   e.stopPropagation();
   setImageIndex((prev) => (prev === 0 ? srcs.length - 1 : prev - 1));
   };

   // gets the next ad image
   function right(e: any) {
    e.stopPropagation();
   setImageIndex((prev) => (prev === srcs.length - 1 ? 0 : prev + 1));
   };

  return (
    <div className={`ad ${srcs[imageIndex].route && 'routable'}`} onClick={() => 
    {
     if(srcs[imageIndex].route){
     handleRouting(srcs[imageIndex].type, srcs[imageIndex].route, 'types');
     }
    }}>
      <img src={srcs[imageIndex].src} alt={`Ad ${imageIndex + 1}`} />

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
        <button onClick={(e) => left(e)}>{'❮'}</button>
        <button onClick={(e) => right(e)}>{'❯'}</button>
      </div>
    </div>
  );
}

export default Ad;
