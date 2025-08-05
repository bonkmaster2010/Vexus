import OverlayedFilter from "./OverlayedFilter";
import Svg from "../../utils/extras/Svgs";
import ListCard from "./Listcard";
import PCardComp from "./PcCard";
import { useMain } from "../../states/MainStates";
import type { PSSIF } from "../../utils/interfaces/components/SC.if";
import '../../styles/Section.css';

function PSS({ data, useRv}: PSSIF){
    const { emptyAllRvItems, showOverlayedFilter, setShowOverlayedFilter, grid, setGrid} = useMain();

    return (
     <>
    <div className="products-filter-btns-cont">
      
   <div className="sort-by-cont">
    <span id="sort-by-text">Sort by</span>
    <select className="filtering-select">
    <option>popularity</option>
    </select>
    </div>
    
      {useRv && (
        <button onClick={emptyAllRvItems} id="clear-rv-btn">
          Clear All Your View History
        </button>
      )}
      
      <div className="filter-btns-cont-smaller">
      <button
        onClick={() => setShowOverlayedFilter()}
        className="overlayed-filter-btn"
      >
        <Svg type="filter" />
      </button>

      <div className="list-or-grid">
        <button className={`list-btn ${grid ? '' : 'active'}`} onClick={() => setGrid(false)}>List</button>
        <button className={`grid-btn ${grid ? 'active' : ''}`} onClick={() => setGrid(true)}>Grid</button>
      </div>
      
      </div>
    </div>

    <hr />
      
      <div className={`products-cont${grid ? '' : '.list'} `}>
        {data.slice(0, 12).map((pro, i) => (
        grid ? <PCardComp
        key={pro.id}
        route={i}
        title={pro.title}
        src={pro.src}
        price={pro.price}
        salePrice={pro.salePrice}
        CartType={false}
        /> : <ListCard
        product={pro}
        key={pro.id}
        route={i}
        title={pro.title}
        src={pro.src}
        price={pro.price}
        salePrice={pro.salePrice}
        />
        ))}
        </div>  
        </>      
    )
}

export default PSS;