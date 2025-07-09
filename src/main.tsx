import App from './App.tsx'
import Products from './comps/Products.tsx'
import Navbar from './comps/Navbar.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import NotFound from './comps/NotFound.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<Navbar/>}>
      <Route path='/' element={<App/>}/>
      <Route path='/products' element={<Products/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
