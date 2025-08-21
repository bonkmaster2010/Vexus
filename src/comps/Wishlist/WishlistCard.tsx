import { useNavigate } from "react-router";
import { useMain } from "../../states/MainStates";
import type { WishlistCardIF } from "../../utils/interfaces/components/SC.if";

function WishlistCard({ product, index, showMtc = true}: WishlistCardIF){
     console.log("showMtc:", showMtc);

     const navigate = useNavigate();
     const { addItemToCart, removeItemFromWishlist } = useMain();
     
     return (
        <div className="wishlist-card">
            <div className="main-wishlist-card-content">
             
             <div className="wishlist-image-cont">
                <img onClick={() => navigate(`/product/${index}`)} src={product.src[0]} alt={`${product.title} image`}/>
             </div>

             <div className="wishlist-card-desc">

            <div className="wishlist-extras">
                <p id="wishlist-delivered-by">Delivered by <span>Jul 21</span></p>
                <p id="if-u-order">If you order within 18 Minutes</p>
            </div>

            <h3 onClick={() => navigate(`/product/${index}`)} id="wishlist-product-name">{product.title}</h3>
            <p id="wishlist-sold-by">Sold by: <b>Vexus</b></p>
        
                <p className="wishlist-card-price">USD {product.price}</p>
                {product.salePrice && <p className="wishlist-card-sale-price">USD {product.salePrice}</p>}

             </div>

            </div>


             {showMtc && <div className="mtcAndremove">
               <span onClick={() => addItemToCart(product, 1, 0)}>Move to Cart</span>
               <span onClick={() => removeItemFromWishlist(product)}>Remove</span>
             </div>}
        </div>
     )
}

export default WishlistCard;