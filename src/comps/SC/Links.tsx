import { NavLink } from "react-router";
import type { Links } from "../../utils/interfaces/Links.interface";
import { useMain } from "../../states/MainStates";

function LinksComponent({ dropdown, title, route }: Links) {
  // Variables
  const { setDropdown } = useMain();

  return (  
    <>
    <div className="nav-item" onMouseEnter={() => setDropdown(dropdown)} onMouseLeave={() => setDropdown('')}>
       <NavLink className="navbar-link" to={route}>{title}</NavLink>
     </div>
    </>
  );
}

export default LinksComponent;
