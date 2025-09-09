import PSS from "./SC/ProductsScrollSection";
import Noti from "./SC/noti";
import Filter from "./Filter";
import OverlayedFilter from "./SC/OverlayedFilter";
import { CAL_B } from "../utils/brand-page/CAL/CAl.brands";
import { useMain } from "../states/MainStates";
import { useParams } from "react-router";
import { FullBrandArr } from "../utils/brand-page/all.brand.arr";
import type { BPIF } from "../utils/interfaces/components/main.comps.if";
import '../styles/BrandPage.css';

function BrandPage({ data }: BPIF){
    const { showOverlayedFilter } = useMain();
    const { brand } = useParams<{ brand?: keyof typeof CAL_B }>();
    
    if(!brand){
        return <Noti text="this brand page does not exist ok"/>
    }

    const b = FullBrandArr[brand];
    const brandData = data.filter(p => p.name.toLowerCase().includes(brand));

    return (
        <>
        {brandData.length == 0 && <Noti text='This brand has no products currently!'/>}
        {!showOverlayedFilter && brandData.length > 0 && <div className="main-products-cont"> 
         <div className="filter-products-cont">
            <Filter specArr={[]} typeArr={[]} manufacturer={[]}/>             
             <div className="b-products-cont-wrapper">
                <div className="b-title-cont">
                
                <div className="b-title-cont-img-cont"> {/* ts a fire name */}
                <img src={b.src} alt={`${b.brand} icon`}/>
                 </div>

                <h3>{b.brand.toUpperCase()}</h3>
                </div>
                 
                 <hr/>

               <PSS searchTerms={[]} data={brandData} title="test" useRv={false}/>
             </div>
         </div>
        </div>}

        {showOverlayedFilter && (
        <OverlayedFilter 
            Filter={Filter}  
            filterProps={{
            specArr: [],
            typeArr: [],
            manufacturer: []
            }} 
        />
        )}

        </>
    )
}

export default BrandPage;