import { useEffect, useState } from "react";
import Noti from "./SC/noti";
import CC from "./SC/CategoryCard";
import PSS from "./SC/ProductsScrollSection";
import CategoryFilter from "./CategoryFilter";
import OverlayedFilter from "./SC/OverlayedFilter";
import { fetchAllProducts, type Product } from "../utils/extras/Data";
import { useParams } from "react-router";
import { useMain } from "../states/MainStates";
import type { CategoryPageCategory, CategoryPageIF } from "../utils/interfaces/components/main.comps.if";
import '../styles/CategoryPage.css';

function CategoryPage({ dataArr, dataCategories }: CategoryPageIF) {
  // Variables
  const { showOverlayedFilter } = useMain();
  const { category } = useParams<{ category?: string }>();
  const c = category || '';
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // fetches the products
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const products = await fetchAllProducts();
      setAllProducts(products);
      setLoading(false);
    };
    loadProducts();
  }, []);
  
  // Data
  const foundObj = dataArr.find((obj: any) => obj[c] !== undefined);
  if (!foundObj || !foundObj[c]) {
    return <Noti text="Category page does not exist" />;
  }
  
  // i suck at naming bru

  // when it shows multiple categories links
  const categoryGroup = dataCategories.find((obj: any) => obj.key === c);

  // when it shows multiple categories links
  const lonleyGroupPartObj = dataCategories.find((obj: any) =>
    obj.mainLinks.some((link: any) => link.key === c)
  );

  // when it only shows 1 category links
  const lonleyGroupPart = lonleyGroupPartObj
    ? lonleyGroupPartObj.mainLinks.filter((obj: any) => obj.key === c)
    : [];

  // Title & Data
  const title = foundObj[c].title;
  const mainLinks = categoryGroup?.mainLinks
    ? categoryGroup.mainLinks
    : lonleyGroupPart[0]
      ? [lonleyGroupPart[0]]
      : [];

  const data = foundObj[c].data;

  if (loading) return <div>Loading products… ⏳</div>;

  return (
    <>
      <div className="category-page-main-wrapper">
        <CategoryFilter data={mainLinks ? mainLinks : lonleyGroupPart.mainLinks} title={title} key={c} />
        <div className="vr" />

        <div className="category-page-main-cont">
          <div className="category-main-cont">
            <h3 className="category-page-title">{title}</h3>

            <h4>Shop by category</h4>
            <div className="category-cont">
              {data.map((cate: CategoryPageCategory, i: number) => (
                <CC
                  key={i}
                  title={cate.title}
                  src={cate.src}
                  route={cate.routeType ? `/categories/${cate.route}` : `/category/${cate.route}`}
                />
              ))}
            </div>
          </div>

          <hr />

          <h3 style={{ margin: '0 auto', marginTop: '10px', color: 'white' }}>Best selling</h3>
          <PSS searchTerms={[]} data={allProducts} useRv={false} cf={true} />
        </div>
      </div>

      {showOverlayedFilter && (
        <OverlayedFilter
          Filter={CategoryFilter}
          filterProps={{
            data: mainLinks ? mainLinks : lonleyGroupPart.mainLinks,
            title: "",
          }}
        />
      )}
    </>
  );
}

export default CategoryPage;
