import WishlistCard from ".././Wishlist/WishlistCard";
import Noti from ".././SC/noti";
import { useMain } from "../../states/MainStates";
import { useNavigate } from "react-router";

function OrderHistory() {
    const { orders } = useMain();
    const navi = useNavigate();


    /* wishlist component but with sum changes  */

    return (
        <div className="main-wishlist-cont">
            <h3 className="generic-title">Order History</h3>
            <div className="small-hr" />

             
            <div className="wishlist-content-wrapper">
            {orders.length === 0 && <Noti text="You have not made any orders" />}

            {orders.map((o, i) => (
            <div 
            onClick={() => navi(`/product/${i}`)}
            key={`${o.id} -  ${i}`} 
            className="order-card">
            <WishlistCard
            key={o.id}
            product={o} 
            index={i}
            showMtc={false}
            />
            </div>
            ))}
            </div>
          
        </div>
    );
}

export default OrderHistory;
