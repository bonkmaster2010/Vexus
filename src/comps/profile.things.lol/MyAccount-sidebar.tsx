import Svg from "../../utils/extras/Svgs";
import userAvatar from '../../images/extra/microless-user-avatar.webp';
import { useCreateUser } from "../../states/CreateUserState";
import { useMain } from "../../states/MainStates";
import { NavLink, useNavigate } from "react-router";
import '../../styles/MyAccountSidebar.css';

function MyAccountSidebar(){
    
    const navi = useNavigate();
    const { name } = useCreateUser()
    const { Logout } = useMain();

    return (
        <div className="main-ma-sidebar">

        <div className="ma-user-details">    
        <div className="profile-picture">
        <img src={userAvatar} alt="user avatar"/>  
        </div>
        <p className="ma-username">{name}</p>
        <p className="signout-btn" onClick={() => {
            navi('/register');
            Logout();
            }}><Svg type='poweroff'/> Sign Out</p>
        </div>

        <div className="ma-btns-cont">
            
        <NavLink to='/account/order-history' className="ma-btn"><Svg type='order-box'/>Order History</NavLink>        
        <NavLink to='/account/addresses' className="ma-btn"><Svg type='addresses'/>Addresses</NavLink>        
        <NavLink to='/wishlist' className="ma-btn"><Svg type='heart'/>Wishlist</NavLink>        
        <NavLink to='/account/reviews' className="ma-btn"><Svg type='star'/>Reviews</NavLink>        
        <NavLink to='/account/user-details' className="ma-btn"><Svg type='user'/>Profile Details</NavLink>        
        <NavLink to='/account/payment-options' className="ma-btn"><Svg type='payment-options'/>Payment Options</NavLink>      
        </div>

        </div>
    )

};

export default MyAccountSidebar