import { useNavigate } from "react-router";
import { useMain } from "../../states/MainStates";
import Svg from "../../utils/extras/Svgs";


function MASubMenu(){

    const { toggleSingleGroup } = useMain()
    const navi = useNavigate();

    return (
    <div className="mm-submenu">
    <h3 className="mm-submenu-return" onClick={() => toggleSingleGroup('')}>
    <Svg type='left-arrow'/> 
    Main Menu
    </h3>
    <div className="mm-submenu-hr"/>
   
    <div className="mm-submenu-btn-cont">
    <div className="navbar-button" onClick={() => navi('/account')}>
    <Svg type="user"/>
    <span>My Profile</span>
    </div>
    
    <div className="navbar-button" onClick={() => navi('/wishlist')}>
    <Svg type="heart"/>
    <span>My Wishlist</span>
    </div>


    <div className="navbar-button" onClick={() => navi('/cart')}>
    <Svg type='cart'/>
    <span>My Cart</span>
    </div>
  </div>

    </div>
    )
};

export default MASubMenu;