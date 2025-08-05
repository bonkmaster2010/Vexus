import WishlistCard from "./WishlistCard";
import { useMain } from "../../states/MainStates";
import { useNavigate } from "react-router";
import type { CartProduct } from "../../utils/interfaces/components/SC.if";
import '../../styles/Wishlist.css';

function Wishlist(){
    const { wishlist, removeItemFromWishlist, addItemToCart } = useMain();
    const navi = useNavigate();

   return (
    
    <div className="main-wishlist-cont">
    <div className="wishlist-content-wrapper">
            {wishlist.length > 0 &&  <div className="cart">
                    {wishlist.map((product: CartProduct, i: number) => (
                        <WishlistCard
                            key={product.id}
                            product={product}
                            index={i}
                            navigate={navi}
                            wishlist={wishlist}
                            addItemToCart={addItemToCart}
                            removeItemFromWishlist={removeItemFromWishlist}
                        />
                    ))}
                </div>}
      </div>
    </div>
    
   )
}

export default Wishlist;