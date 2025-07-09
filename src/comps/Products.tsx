import PcCard from './PcCard';
import Filter from './Filter';
import test from '../images/dreampc.jpeg';
import '../styles/Products.css';
import { useState } from 'react';
import Footer from './Footer';


function Products(){
    const [showFilter, setShowFilter] = useState(false);
    const options = ["sort by popularity"];

    return (
        <>
        <div className='main-products-cont'>
          {showFilter && <Filter setVal={setShowFilter} val={showFilter}/>}
          <div className='filters'>
          <select className='filtering-select'>
          {options.map((option: string, i: number) => (
            <option key={`${option} - ${i}`}>{option}</option>
          ))}
          </select>

          <button onClick={() => setShowFilter(!showFilter)} className='filter-btn'>Filters</button>
         </div>

         <hr/>

         <div className='products-cont'>
          <PcCard src={test} title="test" price="$15,000" style='pc-card'/>
          <PcCard src={test} title="test" price="$15,000" style='pc-card'/>
          <PcCard src={test} title="test" price="$15,000" style='pc-card'/>
          <PcCard src={test} title="test" price="$15,000" style='pc-card'/>
          <PcCard src={test} title="test" price="$15,000" style='pc-card'/>
          <PcCard src={test} title="test" price="$15,000" style='pc-card'/>
          <PcCard src={test} title="test" price="$15,000" style='pc-card'/>
          <PcCard src={test} title="test" price="$15,000" style='pc-card'/>
          <PcCard src={test} title="test" price="$15,000" style='pc-card'/>
          <PcCard src={test} title="test" price="$15,000" style='pc-card'/>
          <PcCard src={test} title="test" price="$15,000" style='pc-card'/>
          <PcCard src={test} title="test" price="$15,000" style='pc-card'/>
          <PcCard src={test} title="test" price="$15,000" style='pc-card'/>
          <PcCard src={test} title="test" price="$15,000" style='pc-card'/>
          <PcCard src={test} title="test" price="$15,000" style='pc-card'/>
         </div>
         <Footer/>
        </div>
        </>
    )
}

export default Products;