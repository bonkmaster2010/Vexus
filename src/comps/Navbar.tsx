import { NavLink, Outlet } from "react-router";
import '../styles/Nav.css';
import { allCategoriesLinks } from "../utils/extraUtils";

function Navbar(){

  

    return (
        <>
        <div className="navbar-cont">
        
        <div className="searchbar-cont">
            <h3 id="logo">V e x u s</h3>
           <div className="search">
             <input placeholder="What are you looking for?"/>
             <button>S</button>
           </div>

        </div>
        
<nav className="navbar-links">
  <div className="nav-item">
    <NavLink className="navbar-link" id="all-cates" to="/">
      <svg xmlns="http://www.w3.org/2000/svg" 
           width="24" height="24" 
           fill="currentColor" 
           viewBox="0 0 24 24">
        <path d="M4 6h16M4 12h16M4 18h16" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" />
      </svg>
      All Categories
    </NavLink>
    <div className="dropdown">
     {allCategoriesLinks.map((link: any, i: number) => (
      <NavLink to={link.route}>{link.linkName}</NavLink>
     ))}
    </div>
  </div>

    <div className="nav-item">
            <NavLink className="navbar-link" to="/categories/electronics">Electronics</NavLink>
            <div className="dropdown">

            </div>
        </div>


        </nav>

        </div>

        <Outlet/>
        </>
    )
}

export default Navbar;