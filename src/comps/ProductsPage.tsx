import { useEffect, useState } from "react";
import { useParams } from "react-router";
import OverlayedFilter from "./SC/OverlayedFilter";
import Filter from "./Filter";
import PSS from "./SC/ProductsScrollSection";
import { useMain } from "../states/MainStates";
import { allSubLinks } from "../utils/Links/Electronics/ElectronicSubLinks";
import { fetchAllProducts, type Product } from "../utils/extras/Data";
import type { ProductsProps } from "../utils/interfaces/components/main.comps.if";
import "../styles/Products.css";

function ProductsPage({ categoryData, useRv = false }: ProductsProps) {
  const { rv, showOverlayedFilter } = useMain();
  const { category: rawCategory } = useParams<{ category?: string; key?: string }>();
  const category = rawCategory || "";

  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const ROUTE_TO_IDS: Record<string, string[]> = {};
  Object.values(allSubLinks).forEach(arr => {
    arr.forEach(item => {
      ROUTE_TO_IDS[item.route] = ROUTE_TO_IDS[item.route] || [];
      ROUTE_TO_IDS[item.route].push(item.id);
    });
  });

  const categoryInfo = !useRv && categoryData
    ? categoryData[category] ?? { filters: [], types: [], manufacturers: [], title: "Products" }
    : { filters: [], types: [], manufacturers: [], title: "Products" };

  const categoryTitle = categoryInfo?.title;

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      if (useRv) {
        setData(rv);
      } else {
        const allProducts = await fetchAllProducts();
        setData(allProducts);
      }
      setLoading(false);
    };

    loadProducts();
  }, [useRv, rv]);

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
              key={category}
              data={data}
              useRv={useRv}
              searchTerms={[categoryTitle.toLowerCase()]}
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
            manufacturer: categoryInfo.manufacturers ?? []
          }}
        />
      )}
    </>
  );
}

export default ProductsPage;
