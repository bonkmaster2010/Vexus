import App from './App.tsx'
import Products from './comps/Products.tsx'
import ProductDetails from './comps/ProductDetails.tsx'
import Navbar from './comps/Navbar.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import NotFound from './comps/NotFound.tsx'
import { allProducts } from './utils/Data.ts'
import Filter from './comps/Filter.tsx'
import { LAPTOP_FILTERS, MOBILE_FILTERS, MONITOR_FILTERS, PC_FILTERS, TABLET_FILTERS } from './utils/filtering/Electronics.ts'
import CategoryPage from './comps/CategoryPage.tsx'
import { electronics } from './utils/CategoryPageUtil.ts'
import Footer from './comps/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<Navbar/>}>
      <Route element={<Footer/>}>
      <Route path='/' element={<App/>}/>
      <Route path='/product/:id' element={<ProductDetails/>}/>
      <Route path='*' element={<NotFound/>}/>      
      
      {/* sections */}
      <Route path='/pcs' element={<Products title="PCs" arr={allProducts} FilterType={Filter} filterArr={PC_FILTERS}/>}/>
      <Route path='/laptops' element={<Products title="Laptops" arr={allProducts} FilterType={Filter} filterArr={LAPTOP_FILTERS}/>}/>
      <Route path='/monitors' element={<Products title="Monitors" arr={allProducts} FilterType={Filter} filterArr={MONITOR_FILTERS}/>}/>
      <Route path='/tablets' element={<Products title="Tablets" arr={allProducts} FilterType={Filter} filterArr={TABLET_FILTERS}/>}/>
      <Route path='/phones' element={<Products title="Mobiles" arr={allProducts} FilterType={Filter} filterArr={MOBILE_FILTERS}/>}/>
      
      {/* Category Pages */}
      <Route path='/categories/electronics' element={<CategoryPage arr={electronics} title="Electronics"/>}/>       

      </Route>
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
