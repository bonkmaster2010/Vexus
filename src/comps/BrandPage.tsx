import PSS from "./SC/ProductsScrollSection";
import Noti from "./SC/noti";
import Filter from "./Filter";
import OverlayedFilter from "./SC/OverlayedFilter";
import { CAL_B } from "../utils/brand-page/CAL/CAl-brands";
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

    return (
        <>
        {!showOverlayedFilter && <div className="main-products-cont"> 
         <div className="filter-products-cont">
             <Filter specArr={[]} typeArr={[]} manufacturer={[]}/>
            <div className="vr"/>
             
             <div className="b-products-cont-wrapper">
                <div className="b-title-cont">
                
                <div className="b-title-cont-img-cont"> {/* ts a fire name */}
                <img src={b.src} alt={`${b.brand} icon`}/>
                 </div>

                <h3>{b.brand.toUpperCase()}</h3>
                </div>
                 
                 <hr/>

               <PSS data={data} title="test" useRv={false}/>
             </div>
         </div>
        </div>}

        {showOverlayedFilter && <OverlayedFilter specArr={[]} typeArr={[]} manufacturer={[]}/>}
        </>
    )
}

export default BrandPage;