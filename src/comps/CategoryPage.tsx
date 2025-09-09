import Noti from "./SC/noti";
import CC from "./SC/CategoryCard";
import PSS from "./SC/ProductsScrollSection";
import CategoryFilter from "./CategoryFilter";
import OverlayedFilter from "./SC/OverlayedFilter";
import { allProducts } from "../utils/extras/Data";
import { useParams } from "react-router";
import { useMain } from "../states/MainStates";
import type { CategoryPageCategory, CategoryPageIF } from "../utils/interfaces/components/main.comps.if";
import '../styles/CategoryPage.css';

function CategoryPage({ dataArr, dataCategories}: CategoryPageIF){
  const { showOverlayedFilter } = useMain();
  const { category } = useParams();
  const c = category || '';

  const foundObj = dataArr.find((obj: any) => obj[c] !== undefined);

  if(!foundObj || !foundObj[c]){
    return <Noti text="Category page does not exist" />
  }

  const categoryGroup = dataCategories.find((obj: any) => obj.key === c)
  
  const lonleyGroupPartObj = dataCategories.find((obj: any) => 
  obj.mainLinks.some((link: any) => link.key === c)
  );
  
  const lonleyGroupPart = lonleyGroupPartObj ? lonleyGroupPartObj.mainLinks.filter((obj: any) => obj.key === c) : [];

  const title = foundObj[c].title;
  const mainLinks = categoryGroup?.mainLinks 
  ? categoryGroup.mainLinks 
  : lonleyGroupPart[0] 
  ? [lonleyGroupPart[0]] 
  : [];

  const data = foundObj[c].data;

  return (
   <>
    <div className="category-page-main-wrapper">
    <CategoryFilter data={mainLinks ? mainLinks : lonleyGroupPart.mainLinks} title={title} key={c} />
      <div className="vr"/>

      <div className="category-page-main-cont">
        <div className="category-main-cont">
          <h3 className="category-page-title">{title}</h3>

          <h4>Shop by category</h4>
          <div className="category-cont">
            {data.map((cate: CategoryPageCategory, i: number) => (
              <CC key={i} title={cate.title} src={cate.src} route={cate.routeType ? `/categories/${cate.route}` : `/category/${cate.route}`} />
            ))}
          </div>
        </div>

        <hr/>

        <h3 style={{margin: '0 auto', marginTop: '10px', color: 'white'}}>Best selling</h3>  
        <PSS searchTerms={[]} data={allProducts} useRv={false} cf={true}/>
      </div>
    </div>

    {showOverlayedFilter && <OverlayedFilter
    Filter={CategoryFilter}
    filterProps={{
    data: mainLinks ? mainLinks : lonleyGroupPart.mainLinks,
    title: "",
   }}
   />}
   </>
  );
}

export default CategoryPage;
