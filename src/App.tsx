import Ad from './comps/SC/Ad';
import Section from './comps/SC/Section';
import GenreCards from './comps/GenreCards';
import { gamingGenre, electronicsGenre, TC_IMAGES} from './utils/categories';
import { testProducts } from './utils/Data';
import './styles/App.css';
import CC from './comps/CategoryCard';

function App() {
  return (
    <>
    <div className='main-page-cont'>
      <Ad/>

      <Section arr={testProducts} title="DAILY OFFERS"/>
      <Section arr={testProducts} title="BEST SELLING LAPTOPS"/>
      <Section arr={testProducts} title="POPULAR GAMING PCS"/>
      <Section arr={testProducts} title="TOP MONITORS"/>
      <Section arr={testProducts} title="BEST SELLING GRAPHIC CARDS"/>
      <Section arr={testProducts} title="FEATURED HOME & KITCHEN APPLIANCES"/>
      <Section arr={testProducts} title="FEATURED MOTHERBOARDS"/>

      <GenreCards images={gamingGenre} title="GAMING"/>

      <Section arr={testProducts} title="BEST DEALS ON FURNITURE"/>
      <Section arr={testProducts} title="POPULAR NETWORKING DEVICES"/>

      <GenreCards images={electronicsGenre} title="ELECTRONICS" />
  
      <Section arr={testProducts} title="POPULAR HEADPHONES"/>
      <Section arr={testProducts} title="ITEMS YOU MAY LIKE"/>
      
        <div className="top-rated-cates-cont">
        <div className="top-rated-cates">
            {TC_IMAGES.map((obj: any, i: number) => (
              <CC key={obj} title={obj.title} src={obj.src} route={obj.route}/>
            ))}
        </div>
        </div>
      
    </div>
    </>
  )
}

export default App
