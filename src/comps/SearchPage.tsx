import OverlayedFilter from "./SC/OverlayedFilter";
import Filter from "./Filter";
import PSS from "./SC/ProductsScrollSection";
import { useEffect, useState } from "react";
import { useMain } from "../states/MainStates";
import { allSubLinks } from "../utils/Links/Electronics/ElectronicSubLinks";
import { fetchAllProducts, type Product } from "../utils/extras/Data";
import { useParams } from "react-router-dom";
import type { ProductsProps } from "../utils/interfaces/components/main.comps.if";
import "../styles/Products.css";

function SearchPage({ categoryData }: ProductsProps) {
  const { showOverlayedFilter, setSearchTerm } = useMain();
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const { term } = useParams<{ term: string }>();

  const ROUTE_TO_IDS: Record<string, string[]> = {};
  Object.values(allSubLinks).forEach(arr => {
    arr.forEach(item => {
      if(item.id){
      ROUTE_TO_IDS[item.route] = ROUTE_TO_IDS[item.route] || [];
      ROUTE_TO_IDS[item.route].push(item.id)};
    });
  });

  const categoryInfo = categoryData.search;
  const categoryTitle = categoryInfo?.title;

  useEffect(() => {
    if (term) setSearchTerm(term);
  }, [term]);

  // Fetch all products
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
            <Filter
              specArr={categoryInfo.filters ?? []}
              typeArr={categoryInfo.types ?? []}
              manufacturer={categoryInfo.manufacturers ?? []}
            />
          <div className="products-cont-wrapper">
            <h3 id="products-page-title">{categoryTitle}</h3>
            <PSS
              useRv={false}
              searchTerms={[term ?? ""]}
              data={data}
              search={true}
              loading={loading}
            />
          </div>
        </div>
      </div>

      {showOverlayedFilter && (
        <OverlayedFilter
          Filter={Filter}
          filterProps={{
            specArr: categoryInfo.filters ?? [],
            typeArr: categoryInfo.types ?? [],
            manufacturer: categoryInfo.manufacturers ?? [],
          }}
        />
      )}
    </>
  );
}

export default SearchPage;
