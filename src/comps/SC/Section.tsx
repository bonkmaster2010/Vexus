import PCardComp from './PcCard';
import type { SectionIF } from '../../utils/interfaces/components/SC.if';
import '../../styles/Section.css';
import { useRef } from 'react';


function Section({title, arr, style, CartType}: SectionIF){

  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (!containerRef.current) return;
    const card = containerRef.current.querySelector('.section-card') as HTMLElement;
    if (!card) return;

    const cardStyle = getComputedStyle(card);
    const gap = parseInt(cardStyle.marginRight) || 12;
    const scrollAmount = card.offsetWidth + gap;

    containerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (!containerRef.current) return;
    const card = containerRef.current.querySelector('.section-card') as HTMLElement;
    if (!card) return;

    const cardStyle = getComputedStyle(card);
    const gap = parseInt(cardStyle.marginRight) || 12;
    const scrollAmount = card.offsetWidth + gap;

    containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

    return (
      <div className={style ? style : 'section-cont'}>
        <h2 className='section-title'>{title}</h2>

         <div className='section-btns'>
         <button onClick={scrollLeft}>❮</button>
         <button id='right-btn-pmo' onClick={scrollRight}>❯</button>
         </div>

        <div className='section-products' ref={containerRef}>
            {arr.map((obj: any, i: number) => (
              <PCardComp key={obj.title} product={obj} CartType={CartType} route={`${i}`} style="section-card" src={obj.src} title={obj.title} price={obj.price}  salePrice={obj.salePrice ? obj.salePrice : ""}/>
            ))}
        </div>
      </div>
    )
}

export default Section;