import PcCard from './PcCard';
import '../styles/Section.css';


function Section({title, arr, style}: any){

function scrollLeft() {
  const container = document.querySelector('.section-products');
  if (!container) return;

  const card = container.querySelector('.section-card');
  if (!card) return;

  const cardStyle = getComputedStyle(card);
  const cardWidth = (card as HTMLElement).offsetWidth;
  const gap = parseInt(cardStyle.marginRight) || 12;

  const scrollAmount = cardWidth + gap;
  container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
}

function scrollRight() {
  const container = document.querySelector('.section-products');
  if (!container) return;

  const card = container.querySelector('.section-card');
  if (!card) return;

  const cardStyle = getComputedStyle(card);
  const cardWidth = (card as HTMLElement).offsetWidth;
  const gap = parseInt(cardStyle.marginRight) || 12;

  const scrollAmount = cardWidth + gap;
  container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}


    return (
      <div className={style ? style : 'section-cont'}>
        <h2 className='section-title'>{title}</h2>

         <div className='section-btns'>
         <button onClick={() => scrollLeft()}>❮</button>
         <button id='right-btn-pmo' onClick={() => scrollRight()}>❯</button>
         </div>

        <div className='section-products'>
            {arr.map((obj: any, i: number) => (
              <PcCard route={i} style="section-card" src={obj.src} title={obj.title} price={obj.price}  salePrice={obj.salePrice ? obj.salePrice : ""}/>
            ))}
        </div>
      </div>
    )
}

export default Section;