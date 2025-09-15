import Svg from '../utils/extras/Svgs';
import LinksComponent from './SC/Links';
import Dropdown from './SC/Dropdown';
import UserDropdown from './SC/UserDropdown';
import { NavLink, useNavigate } from "react-router";
import { useMain } from '../states/MainStates';
import { MainElecLinks } from '../utils/Links/Electronics/ Electronic.links.main';
import { allCatesLinks, allMobileMenuLinks } from '../utils/Links/all-cates.links';
import { useCreateUser } from '../states/CreateUserState';
import '../styles/Nav.css';
import { useState } from 'react';

function Navbar(){
    const navi = useNavigate();
    const { cart, registered, setDropdown, dropdown, setSearchTerm} = useMain();
    const { name } = useCreateUser();
    const [term, setTerm] = useState<string>('');

    function search(){
      if(term.trim().length > 0) {
        setSearchTerm(term);
        navi(`/search/${term}`);
        window.location;
      }
    }

    return (
        <>
        <div className="navbar-cont">
        <div className="searchbar-cont">
            <h3 style={{cursor: 'pointer'}} onClick={() => navi('/')} className="logo">V e x u s</h3>
           <div className="search">
             <input 
             onChange={(e) => setTerm(e.target.value)}
             onKeyDown={(e) => {
              if(e.key === 'Enter'){
                search();
              }}}
             placeholder="What are you looking for?"/>
             <button onClick={() => search()}>
              <Svg type='search'/>
             </button>
           </div>

           <div className='navbar-btns-cont'>
           
           <div 
           onMouseEnter={() => setDropdown('user-dropdown')}
           onMouseLeave={() => setDropdown('')}
           className="navbar-button" onClick={() => {!registered ?
            navi('/register') : navi('/account')}}>
            <Svg type="user"/>
            <span>{registered ? `HELLO ${name.toUpperCase()}` : 'YOUR ACCOUNT'}</span>
            <UserDropdown/>
           </div>

           <div className="navbar-button" onClick={() => navi('/wishlist')}>
            <Svg type="heart"/>
            <span>WISHLIST</span>
           </div>

           <div className="navbar-button" onClick={() => navi('/cart')}>
            {cart.length > 0 && <div className='notification'>{cart.length}</div>}
            <Svg type='cart'/>
            <span>YOUR CART</span>
           </div>
           </div>

        </div>
        
      <nav className="navbar-links">
          <div className="all-cates" onMouseEnter={() => setDropdown('all-cates-dropdown')} onMouseLeave={() => setDropdown('')}>
            <Svg type="burger"/>
            ALL CATEGORIES
          </div>
         
          {dropdown == "all-cates-dropdown" && <div className='all-cates-dropdown'
          onMouseEnter={() => setDropdown('all-cates-dropdown')}
          onMouseLeave={() => setDropdown('')}
          >
            {allMobileMenuLinks.map((link) => (
            <NavLink key={`${link.route} - ${link.linkName}`} className='all-cates-dropdown-link' to={`/categories/${link.route}`}>
            {link.linkName}

            <Svg type='right-arrow'/>
            </NavLink>
            ))}
          </div>}

        {allCatesLinks.map(l => (
          <LinksComponent key={l.route} title={l.linkName} route={`/categories/${l.route}`} dropdown={l.dropdown}/>
        ))}
        
        </nav>

        <div className='dropdown-cont'>
          
          {MainElecLinks.map(l => (
            <>
            <Dropdown key={l.route} data={l.mainLinks} brandArr={l.brandArr} route={l.route} type={l.type} src={l.src} />
            </>
          ))}

        </div>

        </div>
        </>
    )
}

export default Navbar;