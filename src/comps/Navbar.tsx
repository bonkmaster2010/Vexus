import cartLogo from '../images/navbar/shopping-cart-outline.webp';
import Svg from '../utils/extras/Svgs';
import LinksComponent from './SC/Links';
import Dropdown from './SC/Dropdown';
import { NavLink, Outlet, useNavigate } from "react-router";
import { useMain } from '../states/MainStates';
import { MainElecLinks } from '../utils/Links/Electronics/ Electronic.links.main';
import { allCatesLinks } from '../utils/Links/all-cates.links';
import type { Link } from '../utils/interfaces/Links.interface';
import '../styles/Nav.css';

function Navbar(){
    const navi = useNavigate();
    const { cart } = useMain();

    return (
        <>
        <div className="navbar-cont">
        <div className="searchbar-cont">
            <h3 style={{cursor: 'pointer'}} onClick={() => navi('/')} id="logo">V e x u s</h3>
           <div className="search">
             <input placeholder="What are you looking for?"/>
             <button>S</button>
           </div>
           
           <div className='navbar-btns-cont'>
           <div className="navbar-button" onClick={() => navi('/wishlist')}>
            <Svg type="heart"/>
            <span>WISHLIST</span>
           </div>

           <div className="navbar-button" onClick={() => navi('/cart')}>
            {cart.length > 0 && <div className='notification'>{cart.length}</div>}
            <img className='navbar-text-img' src={cartLogo} alt="cart logo"/>
            <span>YOUR CART</span>
           </div>
           </div>

        </div>
        
      <nav className="navbar-links">
        <div className="nav-item">
          <p className="navbar-link" id="all-cates">
            <Svg type="burger"/>
            ALL CATEGORIES
          </p>
         
          <div className='all-cates-dropdown'>
            {allCatesLinks.map((link: Link) => (
              <NavLink key={`${link.route} - ${link.linkName}`} className='all-cates-dropdown-link' to={`/categories/${link.route}`}>{link.linkName}</NavLink>
            ))}
          </div>
        </div>

        {allCatesLinks.map(l => (
          <LinksComponent key={l.route} title={l.linkName} route={`/categories/${l.route}`} dropdown={l.dropdown}/>
        ))}
        
        </nav>

        <div className='dropdown-cont'>
          
          {MainElecLinks.map(l => (
            <Dropdown key={l.route} data={l.mainLinks} brandArr={l.brandArr} route={l.route} type={l.type} src={l.src} />
          ))}

        </div>

        </div>
        </>
    )
}

export default Navbar;