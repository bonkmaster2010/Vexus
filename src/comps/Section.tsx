import PcCard from './PcCard';
import test from '../images/dreampc.jpeg';



function Section({title, arr}: any){

    return (
      <div className='section.cont'>
        <h2>{title}</h2>

        <div className='section-products'>
          <PcCard src={test} title="test" price="$15,000" style='weekly-fav-card'/>
          <PcCard src={test} title="test" price="$15,000" style='weekly-fav-card'/>
          <PcCard src={test} title="test" price="$15,000" style='weekly-fav-card'/>
        </div>
      </div>
    )
}