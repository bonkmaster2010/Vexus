import Ad from './comps/SC/Ad';
import Section from './comps/SC/Section';
import GenreCards from './comps/GenreCards';
import CC from './comps/SC/CategoryCard';
import useResetFilters from './comps/hooks/ResetFilters.hook';
import { gamingGenre, MPECelctronicsGenre, TC_IMAGES } from './utils/MPC/exports.mpc';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import './styles/App.css';

function App() {
  const location = useLocation();
  const { clearUrlParams } = useResetFilters();

  useEffect(() => {
    clearUrlParams();
  }, [location.search]);

  return (
    <div className='main-page-cont'>
      <Ad />

      <Section searchTerm="daily-offers" title="DAILY OFFERS" />
      <Section searchTerm="laptops" title="BEST SELLING LAPTOPS" />
      <Section searchTerm="gaming-pcs" title="POPULAR GAMING PCS" />
      <Section searchTerm="monitors" title="TOP MONITORS" />
      <Section searchTerm="graphics-cards" title="BEST SELLING GRAPHICS CARDS" />
      <Section searchTerm="home-appliances" title="FEATURED HOME & KITCHEN APPLIANCES" />
      <Section searchTerm="motherboards" title="FEATURED MOTHERBOARDS" />

      <GenreCards images={gamingGenre} title="GAMING" />

      <Section searchTerm="furniture" title="BEST DEALS ON FURNITURE" />
      <Section searchTerm="network-devices" title="POPULAR NETWORKING DEVICES" />

      <GenreCards images={MPECelctronicsGenre} title="ELECTRONICS" />

      <Section searchTerm="headphones" title="POPULAR HEADPHONES" />
      <Section searchTerm="phones" title="ITEMS YOU MAY LIKE" />

      <div className="top-rated-cates-cont">
        <div className="top-rated-cates">
          {TC_IMAGES.map((obj: any) => (
            <CC key={obj.title} title={obj.title} src={obj.src} route={obj.route} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
