import CC from "./CategoryCard";
import '../styles/CategoryPage.css';
import Section from "./SC/Section";
import { allProducts } from "../utils/Data";



function CategoryPage({arr, title}: any){


    return (
        <div className="category-page-main-cont">
           <div className="category-main-cont">
            <h3 className="category-page-title">{title}</h3>

             <h4>Shop by category</h4>
           <div className="category-cont">
            {arr.map((cate: any, i: number) => (
                <CC title={cate.title} src={cate.src} route={cate.route}/>
            ))}
           </div>
         </div>

         <hr/>

          <h3 style={{margin: '0px auto', marginTop: '10px', color: 'white'}}>Best selling</h3>  
         <Section arr={allProducts} title="Best selling PCs"/>
         <Section arr={allProducts} title="Best selling Laptops"/>
         <Section arr={allProducts} title="Best selling Monitors"/>
         <Section arr={allProducts} title="Best selling Phones"/>
         <Section arr={allProducts} title="Best selling Tablets"/>
        </div>
    )
}

export default CategoryPage;