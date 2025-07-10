import PcCard from './PcCard';
import test from '../images/dreampc.jpeg';
import '../styles/Section.css';


function Section({title, arr}: any){

   function scrollLeft() {
  document.querySelector('.section-products')?.scrollBy({ left: -600, behavior: 'smooth' });
}

function scrollRight() {
  document.querySelector('.section-products')?.scrollBy({ left: 520, behavior: 'smooth' });
}


    return (
      <div className='section-cont'>
        <h2>{title}</h2>

        <div className='section-products'>
        
         <div className='section-btns'>
         <button onClick={() => scrollLeft()}>❮</button>
         <button id='right-btn-pmo' onClick={() => scrollRight()}>❯</button>
         </div>
        
          <PcCard src={test} title="test" price="$15,000" style='section-card'/>
          <PcCard src={test} title="test" price="$15,000" style='section-card'/>
          <PcCard src={test} title="test" price="$15,000" style='section-card'/>
          <PcCard src={test} title="test" price="$15,000" style='section-card'/>
          <PcCard src={test} title="test" price="$15,000" style='section-card'/>
          <PcCard src={test} title="test" price="$15,000" style='section-card'/>
          <PcCard src={test} title="test" price="$15,000" style='section-card'/>
          <PcCard src={test} title="test" price="$15,000" style='section-card'/>
          <PcCard src={test} title="test" price="$15,000" style='section-card'/>
          <PcCard src={test} title="test" price="$15,000" style='section-card'/>
          <PcCard src={test} title="test" price="$15,000" style='section-card'/>

        </div>
      </div>
    )
}

export default Section;