import Ad from './comps/Ad';
import Footer from './comps/Footer';
import { useNavigate } from 'react-router';
import './styles/App.css';

function App() {
  const navi = useNavigate();
  return (
    <>
    <div className='main-page-cont'>
      <Ad/>

      <button className='browse-products' onClick={() => navi("/products")}>Browse Products</button>


     <Footer/>
    </div>
    </>
  )
}

export default App
