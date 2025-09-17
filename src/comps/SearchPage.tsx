import OverlayedFilter from "./SC/OverlayedFilter";
import Filter from "./Filter";
import PSS from "./SC/ProductsScrollSection";
import { useEffect, useState } from "react";
import { useMain } from "../states/MainStates";
import { allSubLinks } from "../utils/Links/Electronics/ElectronicSubLinks";
import { fetchAllProducts, type Product } from "../utils/extras/Data";
import type { ProductsProps } from "../utils/interfaces/components/main.comps.if";
import "../styles/Products.css";

function SearchPage({ categoryData }: ProductsProps) {
  // Variables 
  const { showOverlayedFilter, currentProducts, searchTerm } = useMain();
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const ROUTE_TO_IDS: Record<string, string[]> = {};
  Object.values(allSubLinks).forEach(arr => {
    arr.forEach(item => {
      ROUTE_TO_IDS[item.route] = ROUTE_TO_IDS[item.route] || [];
      ROUTE_TO_IDS[item.route].push(item.id);
    });
  });
  const categoryInfo = categoryData.search;
  const categoryTitle = categoryInfo?.title;

  // fetches products
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const allProducts = await fetchAllProducts();
      setData(allProducts);
      setLoading(false);
    };

    loadProducts();
  }, []);

  return (
    <>
      <div className="main-products-cont">
        <div className="filter-products-cont">
          {currentProducts.length > 0 && <Filter
            specArr={categoryInfo.filters ?? []}
            typeArr={categoryInfo.types ?? []}
            manufacturer={categoryInfo.manufacturers ?? []}
          />}
          <div className="products-cont-wrapper">
            <h3 id="products-page-title">{categoryTitle}</h3>    
            <PSS useRv={false} searchTerms={[searchTerm]} data={data} search={true} loading={loading} />
          </div>
        </div>
      </div>

      {currentProducts.length > 0 && showOverlayedFilter && (
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

export default SearchPage;
