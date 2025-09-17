import PSS from "./SC/ProductsScrollSection";
import Noti from "./SC/noti";
import Filter from "./Filter";
import OverlayedFilter from "./SC/OverlayedFilter";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CAL_B } from "../utils/brand-page/CAL/CAl.brands";
import { useMain } from "../states/MainStates";
import { FullBrandArr } from "../utils/brand-page/all.brand.arr";
import { fetchAllProducts, type Product } from "../utils/extras/Data";
import type { BPIF } from "../utils/interfaces/components/main.comps.if";
import "../styles/BrandPage.css";

function BrandPage({}: BPIF) {
  // Variables
  const { showOverlayedFilter } = useMain();
  const { brand } = useParams<{ brand?: keyof typeof CAL_B }>();
  const [brandData, setBrandData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch products
  useEffect(() => {
    if (!brand) return;

    const loadProducts = async () => {
      setLoading(true);
      const allProducts = await fetchAllProducts();
      const filtered = allProducts.filter(p =>
        p.name.toLowerCase().includes(brand.toLowerCase())
      );
      setBrandData(filtered);
      setLoading(false);
    };

    loadProducts();
  }, [brand]);

  if (!brand) {
    return <Noti text="This brand page does not exist!" />;
  }

  const b = FullBrandArr[brand] || "brand";

  return (
    <>
      {(b == undefined || !showOverlayedFilter && brandData.length == 0) && <Noti text="This brand doesn't have any products currently!"/>}
      {!showOverlayedFilter && brandData.length > 0 && (
        <div className="main-products-cont">
          <div className="filter-products-cont">
            <Filter specArr={[]} typeArr={[]} manufacturer={[]} />
            <div className="b-products-cont-wrapper">
              <div className="b-title-cont">
                <div className="b-title-cont-img-cont">
                  <img src={b.src} alt={`${b.brand} icon`} />
                </div>
                <h3>{b.brand.toUpperCase()}</h3>
              </div>
              <hr />
              <PSS searchTerms={[]} data={brandData} title={b.brand} useRv={false} loading={loading} />
            </div>
          </div>
        </div>
      )}

      {showOverlayedFilter && (
        <OverlayedFilter
          Filter={Filter}
          filterProps={{
            specArr: [],
            typeArr: [],
            manufacturer: [],
          }}
        />
      )}
    </>
  );
}

export default BrandPage;
