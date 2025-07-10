import Ad from './comps/Ad';
import Footer from './comps/Footer';
import { useNavigate } from 'react-router';
import './styles/App.css';
import Section from './comps/Section';

function App() {
  const navi = useNavigate();
  return (
    <>
    <div className='main-page-cont'>
      <Ad/>

      <Section title="DAILY OFFERS  "/>
     <Footer/>
    </div>
    </>
  )
}

export default App
