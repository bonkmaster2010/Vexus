import App from './App.tsx'
import ProductDetails from './comps/ProductDetails.tsx'
import NotFound from './comps/NotFound.tsx'
import CategoryPage from './comps/CategoryPage.tsx'
import Cart from './comps/Cart/Cart.tsx'
import Wishlist from './comps/Wishlist/Wishlist.tsx'
import ProductsPage from './comps/ProductsPage.tsx'
import ScrollRestorationWrapper from './comps/routing/ScrollRestoreWrapper.tsx'
import BrandPage from './comps/BrandPage.tsx'
import Layout from './comps/Layout.tsx'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { allProducts } from './utils/extras/Data.ts'
import { fullElecData } from './utils/filtering/Electronics/ElectronicsCategoriesFilters.ts'
import { allCatesFilters } from './utils/Links/all-cates.links.ts'
import { allCPCData } from './utils/CPC/allCPC.data.ts'
import { ResetOnRouteChange } from './comps/routing/ResetStateOnNavigation.tsx'

createRoot(document.getElementById('root')!).render(
   <BrowserRouter basename="/">
    <ScrollRestorationWrapper> 
    <ResetOnRouteChange>
      <Routes>
      <Route element={<Layout/>}>
      <Route path='/' element={<App/>}/>
      <Route path='/product/:id' element={<ProductDetails/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='*' element={<NotFound/>}/>      
      <Route path='/categories/:category' element={<CategoryPage dataArr={allCPCData} dataCategories={allCatesFilters}/>}/>       

      <Route path='/category/:category' element={<ProductsPage categoryData={fullElecData} arr={allProducts} />}/>
      <Route path='/b/:brand' element={<BrandPage data={allProducts}/>}/>
      <Route path='/all-rv-products' element={<ProductsPage arr={[]} useRv={true} title="Your Recently Viewed Items" />}/>
      </Route>
     </Routes>
    </ResetOnRouteChange>
    </ScrollRestorationWrapper>
    </BrowserRouter>
)
