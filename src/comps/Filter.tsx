import '../styles/Filter.css';
import Select from './Select';


function Filter({setVal, val}: any){
 
    const ramOptions = [
  "8 GB",
  "16 GB",
  "32 GB",
  "64 GB"
];

const gpuOptions = [
  "NVIDIA GeForce",
  "AMD Radeon",
  "Intel Integrated"
];

const cpuOptions = [
  "Intel",
  "AMD"
];

const priceOptions = [
  "Under $1000",
  "$1000 - $1500",
  "$1500 - $2000",
  "Above $2000"
];
    
   
    return (
        <>

        <div onClick={() => setVal(false)} className="overlay">
        <div onClick={(e) => e.stopPropagation()} className="filtering-panel">

            <button className="close-btn" onClick={() => setVal(false)}>✕</button>

            <h2 className="filter-heading">Filter Products</h2>

            <div className="price-selectors">
            <input placeholder="Lowest Price" />
            <input placeholder="Highest Price" />
            </div>

            <div className="filter-selectors">
            <Select name="Sort" arr={priceOptions} />
            <Select name="RAM" arr={ramOptions} />
            <Select name="CPU" arr={cpuOptions} />
            <Select name="GPU" arr={gpuOptions} />
            </div>

            <button className="apply-btn">Apply Filters</button>

        </div>
        </div>

        
        </>
    )
}

export default Filter;