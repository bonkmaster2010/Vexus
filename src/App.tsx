import Ad from './comps/SC/Ad';
import Section from './comps/SC/Section';
import GenreCards from './comps/GenreCards';
import CC from './comps/SC/CategoryCard';
import useResetFilters from './comps/hooks/ResetFilters.hook';
import { gamingGenre, electronicsGenre, TC_IMAGES} from './utils/MPC/exports.mpc';
import { TestProducts } from './utils/extras/Data';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import './styles/App.css';

function App() {
  const location = useLocation();
  const { clearUrlParams } = useResetFilters();
  
  useEffect(() => {clearUrlParams()}, [location.search])

  return (
    <>
    <div className='main-page-cont'>
      <Ad/>

      <Section arr={TestProducts} title="DAILY OFFERS"/>
      <Section arr={TestProducts} title="BEST SELLING LAPTOPS"/>
      <Section arr={TestProducts} title="POPULAR GAMING PCS"/>
      <Section arr={TestProducts} title="TOP MONITORS"/>
      <Section arr={TestProducts} title="BEST SELLING GRAPHIC CARDS"/>
      <Section arr={TestProducts} title="FEATURED HOME & KITCHEN APPLIANCES"/>
      <Section arr={TestProducts} title="FEATURED MOTHERBOARDS"/>

      <GenreCards images={gamingGenre} title="GAMING"/>

      <Section arr={TestProducts} title="BEST DEALS ON FURNITURE"/>
      <Section arr={TestProducts} title="POPULAR NETWORKING DEVICES"/>

      <GenreCards images={electronicsGenre} title="ELECTRONICS" />
  
      <Section arr={TestProducts} title="POPULAR HEADPHONES"/>
      <Section arr={TestProducts} title="ITEMS YOU MAY LIKE"/>
      
        <div className="top-rated-cates-cont">
        <div className="top-rated-cates">
            {TC_IMAGES.map((obj: any, i: number) => (
              <CC key={obj.title} title={obj.title} src={obj.src} route={obj.route}/>
            ))}
        </div>
        </div>
      
    </div>
    </>
  )
}

export default App
