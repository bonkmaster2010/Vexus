import App from './App.tsx'
import ProductDetails from './comps/ProductDetails.tsx'
import NotFound from './comps/NotFound.tsx'
import CategoryPage from './comps/CategoryPage.tsx'
import Cart from './comps/Cart/Cart.tsx'
import Wishlist from './comps/Wishlist/Wishlist.tsx'
import ProductsPage from './comps/ProductsPage.tsx'
import BrandPage from './comps/BrandPage.tsx'
import Layout from './comps/Layouts/Layout.tsx'
import CreateUser from './comps/CreateUser.tsx'
import ProfileDetails from './comps/profile.things.lol/profile-details.tsx'
import ProfileLayout from './comps/Layouts/ProfileLayout.tsx'
import OrderHistory from './comps/profile.things.lol/OrderHistory.tsx'
import AccountCards from './comps/profile.things.lol/AccountCards.tsx'
import PaymentOptions from './comps/profile.things.lol/payment.options.tsx'
import Addresses from './comps/profile.things.lol/Addresses-stuff/Addresses.tsx'
import AddAddress from './comps/profile.things.lol/Addresses-stuff/Address.add.tsx'
import EditAddress from './comps/profile.things.lol/Addresses-stuff/Address.edit.tsx'
import AccountReviews from './comps/profile.things.lol/AccountReviews.tsx'
import SearchPage from './comps/SearchPage.tsx'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { fullElecCategoriesData } from './utils/filtering/Electronics/ElectronicsCategoriesFilters.ts'
import { allCatesFilters } from './utils/Links/all-cates.links.ts'
import { allCPCData } from './utils/CPC/allCPC.data.ts'
import { ResetOnRouteChange } from './comps/routing/ResetStateOnNavigation.tsx'

// routes
createRoot(document.getElementById('root')!).render(
   <BrowserRouter basename="/">
    <ResetOnRouteChange>
      <Routes>
      <Route path='/register' element={<CreateUser/>}/>
      <Route element={<Layout/>}>
      <Route path='/' element={<App/>}/>
      <Route path='/product/:productLink' element={<ProductDetails/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='*' element={<NotFound/>}/>      
      <Route path='/categories/:category' element={<CategoryPage dataArr={allCPCData} dataCategories={allCatesFilters}/>}/>       

      <Route path='/category/:category' element={<ProductsPage categoryData={fullElecCategoriesData}/>}/>
      <Route path='/search/:term' element={<SearchPage categoryData={fullElecCategoriesData}/>}/>
      <Route path='/b/:brand' element={<BrandPage/>}/>
      <Route path='/all-rv-products' element={<ProductsPage useRv={true} title="Your Recently Viewed Items" />}/>
      
      {/* user stuff */}
      <Route element={<ProfileLayout/>}>
      <Route path='/account' element={<AccountCards/>}/>
      <Route path='/account/user-details' element={<ProfileDetails/>}/>
      <Route path='/account/order-history' element={<OrderHistory/>}/>
      <Route path='/account/payment-options' element={<PaymentOptions/>}/>
      <Route path='/account/addresses' element={<Addresses/>}/>
      <Route path='/account/addresses/add' element={<AddAddress/>}/>
      <Route path='/account/addresses/edit/:i' element={<EditAddress/>}/>
      <Route path='/account/reviews' element={<AccountReviews/>}/>
      <Route path='/wishlist/:id?' element={<Wishlist/>}/>
      </Route>
      </Route>
     </Routes>
    </ResetOnRouteChange>
    </BrowserRouter>
)
