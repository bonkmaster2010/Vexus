import PCardComp from './PcCard';
import { scrollLeft, scrollRight } from '../../utils/fns/extra.fns';
import type { SectionIF } from '../../utils/interfaces/components/SC.if';
import '../../styles/Section.css';


function Section({title, arr, style, CartType}: SectionIF){

    return (
      <div className={style ? style : 'section-cont'}>
        <h2 className='section-title'>{title}</h2>

         <div className='section-btns'>
         <button onClick={() => scrollLeft()}>❮</button>
         <button id='right-btn-pmo' onClick={() => scrollRight()}>❯</button>
         </div>

        <div className='section-products'>
            {arr.map((obj: any, i: number) => (
              <PCardComp key={obj.title} product={obj} CartType={CartType} route={`${i}`} style="section-card" src={obj.src} title={obj.title} price={obj.price}  salePrice={obj.salePrice ? obj.salePrice : ""}/>
            ))}
        </div>
      </div>
    )
}

export default Section;