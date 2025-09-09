import Noti from "./noti";
import Svg from "../../utils/extras/Svgs";
import ListCard from "./Listcard";
import PCardComp from "./PcCard";
import { useMain } from "../../states/MainStates";
import { useFilters } from "../../states/FilterState";
import { CATEGORY_OVERRIDES, matchWord, normalize, slugify } from "../../utils/fns/extra.fns";
import { useEffect, useState } from "react";
import type { PSSIF } from "../../utils/interfaces/components/SC.if";
import '../../styles/Section.css';

function PSS({ data, useRv, searchTerms }: PSSIF) {
  const { emptyAllRvItems, setShowOverlayedFilter, grid, setGrid } = useMain();
  const { selectedTypes, selectedManufacturers, selectedSpecs } = useFilters();

  const itemsPerPage = 12;
  const [pageIndex, setPageIndex] = useState(1);
  const [currentProducts, setCurrentProducts] = useState<typeof data>([]);
  const [totalPageStates, setTotalPagesState] = useState<number>(1);

  /* MASSIVE (ykw else is massive?) filtering function right here */

  useEffect(() => {
    const baseData = searchTerms.length == 0 || searchTerms.includes('daily-offers')
      ? data 
      : data.filter(p => {
          if (!p.real_category) return false;
          const categories = p.real_category.split('›').map(c => normalize(c.trim()));
          const lastCategory = categories[categories.length - 1];
          const parentCategory = CATEGORY_OVERRIDES[lastCategory] || lastCategory;

          const searchWords = searchTerms
            .flatMap(s => s.split('_').map(w => normalize(w)));

          return searchWords.some(word => matchWord(parentCategory, word));
        });

    const filtered = baseData
      .filter(p => selectedTypes.length === 0 || selectedTypes.some(t => p.name.toLowerCase().includes(t.toLowerCase())))
      .filter(p => selectedManufacturers.length === 0 || selectedManufacturers.some(m => p.name.toLowerCase().includes(m.toLowerCase())))
      .filter(p => selectedSpecs.length === 0 || selectedSpecs.some(s => p.name.toLowerCase().includes(s.toLowerCase())));

    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    setPageIndex(1);
    setCurrentProducts(filtered.slice((pageIndex - 1) * itemsPerPage, pageIndex * itemsPerPage));
    setTotalPagesState(totalPages);
  }, [selectedManufacturers, selectedSpecs, selectedTypes, pageIndex, searchTerms, data]);


  /* MASSIVE (ykw else is massive?) filtering function right here */

  const handlePrev = () => setPageIndex(prev => Math.max(prev - 1, 1));
  const handleNext = () => setPageIndex(prev => Math.min(prev + 1, totalPageStates));

  return (
  <>
    {currentProducts.length === 0 ? (
      <Noti text="No products in here yet!" />
    ) : (
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

        <div className={`products-cont${grid ? '' : '.list'}`}>
          {currentProducts.map((pro, i) =>
            grid ? (
              <PCardComp
                key={`${pro.id}-${i}`}
                route={slugify(pro.name)}
                title={pro.name}
                src={pro.image}
                price={pro.discount_price}
                salePrice={pro.actual_price}
                CartType={false}
              />
            ) : (
              <ListCard
                key={`${pro.id}-${i}`}
                product={pro}
                route={slugify(pro.name)}
                title={pro.name}
                src={pro.image}
                price={pro.discount_price}
                salePrice={pro.actual_price}
              />
            )
          )}
        </div>

        <div className="pagination-section">
          <button
            className={`pagination-btn ${pageIndex > 1 ? '' : 'unactive'}`}
            onClick={handlePrev}
          >
            <Svg type="left-arrow-2"/>
          </button>

          <p>{pageIndex} / {totalPageStates}</p>

          <button
            className={`pagination-btn ${pageIndex < totalPageStates ? '' : 'unactive'}`}
            onClick={handleNext}
          >
            <Svg type="right-arrow-2"/>
          </button>
        </div>
      </>
      )}  
    </>
  );
}

export default PSS;
