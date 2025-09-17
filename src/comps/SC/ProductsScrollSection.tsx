import Svg from "../../utils/extras/Svgs";
import ListCard from "./Listcard";
import PCardComp from "./PcCard";
import spinner from '../../images/0s-200px-200px-unscreen.gif';
import searchNotFound from '../../images/search-notfound-removebg-preview.png';
import { useMain } from "../../states/MainStates";
import { useFilters } from "../../states/FilterState";
import { CATEGORY_OVERRIDES, matchWord, normalize, slugify } from "../../utils/fns/extra.fns";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import type { PSSIF } from "../../utils/interfaces/components/SC.if";
import '../../styles/Section.css';
import Noti from "./noti";

// product scroll sections
function PSS({ data, useRv, searchTerms, loading = false, search = false }: PSSIF) {
  // Variables
  const { emptyAllRvItems, setShowOverlayedFilter, grid, setGrid, searchTerm, setCurrentProducts, currentProducts } = useMain();
  const { selectedTypes, selectedManufacturers, selectedSpecs, minPrice, maxPrice } = useFilters();

  const itemsPerPage = 8;
  const [pageIndex, setPageIndex] = useState(1);
  const [totalPageStates, setTotalPagesState] = useState<number>(1);
  const [currentFilter, setCurrentFilter] = useState<string>('popular');
  const navi = useNavigate();

  /* =============================
      Massive Filtering Function (ykw else is massive?)
     ============================= */
  useEffect(() => {
    let baseData;

    // Search filtering
    if (search && searchTerm && searchTerm.trim() !== '') {
      baseData = data.filter(p => matchWord(p.name, searchTerm));
    } else {
      baseData =
        searchTerms.length === 0 || searchTerms.includes('daily-offers')
          ? data
          : data.filter(p => {
              if (!p.real_category) return false;

              const categories = p.real_category
                .split('›')
                .map(c => normalize(c.trim()));

              const lastCategory = categories[categories.length - 1];
              const parentCategory = CATEGORY_OVERRIDES[lastCategory] || lastCategory;

              const searchWords = searchTerms.map(term => normalize(term).replace(/\s+/g, ''));

              return searchWords.some(word => matchWord(parentCategory, word));
            });
    }

    // Filter by types, manufacturers, specs
    const filtered = baseData
      .filter(p => 
      selectedTypes.length === 0 ||
      selectedTypes.some(t => matchWord(p.name, t))
    )
    .filter(p => 
      selectedManufacturers.length === 0 ||
      selectedManufacturers.some(m => matchWord(p.name, m))
      )
      .filter(p =>
        selectedSpecs.length === 0 ||
        selectedSpecs.some(s => p.name.toLowerCase().includes(s.toLowerCase()))
      );

    // Price filtering
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);
    const hasUserMin = minPrice !== '';
    const hasUserMax = maxPrice !== '';

    const priceFiltered =
      hasUserMin || hasUserMax
        ? filtered.filter(p => {
            const price = parseFloat(p.actual_price);
            if (hasUserMin && hasUserMax) return price >= min && price <= max;
            if (hasUserMin) return price >= min;
            if (hasUserMax) return price <= max;
            return true;
          })
        : filtered;

    // Sorting
    let sorted: typeof filtered = [];
    if (currentFilter === 'price lowest to highest') {
      sorted = priceFiltered.slice().sort((a, b) => parseFloat(a.actual_price) - parseFloat(b.actual_price));
    } else if (currentFilter === 'price highest to lowest') {
      sorted = priceFiltered.slice().sort((a, b) => parseFloat(b.actual_price) - parseFloat(a.actual_price));
    } else {
      sorted = priceFiltered; 
    }

    // Pagination
    const totalPages = Math.ceil(priceFiltered.length / itemsPerPage);
    setTotalPagesState(totalPages);

    const newProducts = sorted.slice((pageIndex - 1) * itemsPerPage, pageIndex * itemsPerPage);

    const isSame =
      currentProducts.length === newProducts.length &&
      currentProducts.every((item, idx) => item.id === newProducts[idx].id);

    if (!isSame) {
      setCurrentProducts(newProducts);
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [
    selectedManufacturers,
    selectedSpecs,
    selectedTypes,
    searchTerm,
    searchTerms,
    data,
    pageIndex,
    currentFilter,
    minPrice,
    maxPrice
  ]);

  const handlePrev = () => {
    setPageIndex(prev => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setPageIndex(prev => Math.min(prev + 1, totalPageStates));
  };

  return (
    <>
      {/* No Products Found */}
      {currentProducts.length === 0 && !loading ? (
        search ? (
          <div className="no-products-cont">
            <img src={searchNotFound} />
            <p>No products found that match with the term "{searchTerms[0]}"!</p>
            <button onClick={() => navi('/')}>Return To Home!</button>
          </div>
        ) : (
          <Noti text="We can't seem to find any products here!" />
        )
      ) : (
        <>
          {/* Sorting and Layout Controls */}
          <div className="products-filter-btns-cont">
            <div className="sort-by-main-cont">
              <div className="sort-by-cont">
                <span id="sort-by-text">Sort by</span>
                <select
                  className="filtering-select"
                  onChange={(e) => setCurrentFilter(e.target.value)}
                >
                  <option>Popularity</option>
                  <option value='price lowest to highest'>Price Lowest To Highest</option>
                  <option value='price highest to lowest'>Price Highest To Lowest</option>
                </select>
              </div>

              {useRv && (
                <button onClick={emptyAllRvItems} id="clear-rv-btn">
                  Clear All Your View History
                </button>
              )}
            </div>

            <div className="layout-cont">
              <div className="filter-btns-cont-smaller">
                <button
                  onClick={() => setShowOverlayedFilter()}
                  className="overlayed-filter-btn"
                >
                  <Svg type="filter" />
                </button>

                <div className="list-or-grid">
                  <button
                    className={`list-btn ${grid ? '' : 'active'}`}
                    onClick={() => setGrid(false)}
                  >
                    List
                  </button>
                  <button
                    className={`grid-btn ${grid ? 'active' : ''}`}
                    onClick={() => setGrid(true)}
                  >
                    Grid
                  </button>
                </div>
              </div>
            </div>
          </div>

          <hr />

          {/* Products Grid or List */}
          <div className={`products-cont${grid ? '' : 'list'}`}>
            {loading
              ? 
                Array.from({ length: 8 }).map((_, i) =>
                  grid ? (
                    <PCardComp
                      key={`loading-${i}`}
                      product={{} as any}
                      route=''
                      style="pc-card gif"
                      src={spinner}
                      title="......"
                      price="......"
                      salePrice=""
                      CartType={false}
                    />
                  ) : (
                    <ListCard
                      key={`loading-${i}`}
                      product={{} as any}
                      route=''
                      style="pc-card gif"
                      src={spinner}
                      title="......"
                      price="......"
                      salePrice=""
                    />
                  )
                )
              : 
                currentProducts.map((pro, i) =>
                  grid ? (
                    <PCardComp
                      key={`${pro.id}-${i}`}
                      product={pro}
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

          {/* Pagination Controls */}
          <div className="pagination-section">
            <button
              className={`pagination-btn ${pageIndex > 1 ? '' : 'unactive'}`}
              onClick={handlePrev}
            >
              <Svg type="left-arrow-2" />
            </button>

            <p>{pageIndex} / {totalPageStates}</p>

            <button
              className={`pagination-btn ${pageIndex < totalPageStates ? '' : 'unactive'}`}
              onClick={handleNext}
            >
              <Svg type="right-arrow-2" />
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default PSS;
