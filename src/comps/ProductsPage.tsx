import Noti from "./SC/noti";
import OverlayedFilter from "./SC/OverlayedFilter";
import Filter from "./Filter";
import PSS from "./SC/ProductsScrollSection";
import { useMain } from "../states/MainStates";
import { useParams } from "react-router";
import type { ProductsProps } from "../utils/interfaces/components/main.comps.if";
import '../styles/Products.css';

function ProductsPage({ arr, categoryData, useRv = false, title}: ProductsProps) {
      const { rv, showOverlayedFilter } = useMain();
      const { category: rawCategory } = useParams<{ category?: string; key?: string }>();

      const category = rawCategory || "";
     

     const categoryInfo = !useRv && categoryData ? 
      categoryData[category]
      : {
      filters: [],
      types: [],
      manufacturers: [],
      title: title || "Products",
    };
    console.log(category)
    console.log(categoryInfo)
    if (!useRv && !categoryInfo) return <Noti text="Category not found"/>

    const filteredProducts = arr.filter(p => p.category.toLowerCase() === category.toLowerCase());

    const data = useRv ? rv : filteredProducts ?? [];

    const categoryTitle = categoryInfo?.title ;

  return (
    <>
      {data.length === 0 && <Noti text="There are no products here yet" />}

      {data.length > 0 && (
        <>
          <div className="main-products-cont">
            <div className="filter-products-cont">
              <Filter specArr={categoryInfo.filters ?? []} typeArr={categoryInfo.types ?? []} manufacturer={categoryInfo.manufacturers ?? []}/>

              <div className="vr" />
              <div className="products-cont-wrapper">
                <h3 id="products-page-title">{categoryTitle}</h3>
                <PSS data={data} useRv={false}/>
              </div>
            </div>
          </div>
        </>
      )}

      {showOverlayedFilter && (
        <OverlayedFilter
        Filter={Filter}
        filterProps={{
        specArr: categoryInfo.filters ?? [],
        typeArr: categoryInfo.types ?? [],
        manufacturer: categoryInfo.manufacturers ?? []
        }}  
        />
      )}
    </>
  );
}

export default ProductsPage;
