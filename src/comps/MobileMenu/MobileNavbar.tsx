import Svg from '../../utils/extras/Svgs';
import { useEffect, useState } from 'react';
import { useMain } from '../../states/MainStates';
import { useNavigate } from 'react-router';
import '../../styles/Mobile.css'

function MobileNavbar(){
  const navi = useNavigate();
  const { setShowMM, cart} = useMain();
  const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 770);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
    <div className="mm-navbar">
    
     <div className="mm-navbar-top-row">
        {isMobile && <button 
        className="showMM-btn"
        onClick={() => setShowMM(true)}
        >
        <Svg type='burger'/>
        </button>}

        <h3 className='mm-logo' onClick={() => navi('/')}>V e x u s</h3>

        <div className="navbar-button" onClick={() => navi('/cart')}>
        {cart.length > 0 && <div className='notification'>{cart.length}</div>}
        <Svg type='cart'/>
        </div>

     </div>

      <input className='mm-input' placeholder='What are you looking for?'/>
    </div>
    )
};

export default MobileNavbar;