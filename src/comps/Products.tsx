import PcCard from './SC/PcCard';
import '../styles/Products.css';
import Footer from './Footer';



function Products({arr, title, FilterType, filterArr}: any){

    return (
        <>
        <div className='main-products-cont'>
         <hr/>

          <div className='filter-products-cont'>
            <FilterType filterArr={filterArr}/>
          <div className='vr'></div>

         <div className='products-cont'>
          {arr.map((pro: any, i: number) => (
            <PcCard route={i} style="pc-card" title={pro.title} src={pro.src} price={pro.price} salePrice={pro.salePrice} />
          ))}
         </div>
         </div>
         </div>
        </>
    )
}

export default Products;