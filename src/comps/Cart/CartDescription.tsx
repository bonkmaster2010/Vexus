import { useMain } from "../../states/MainStates";
import type { Product } from "../../utils/extras/Data";
import WishlistAndTrash from "./WishlistAndTrash";

function CartDescription({ product, navigate}: {product: Product, navigate: any}) {
    const { wishlist, removeItemFromWishlist, addItemToWishlist, removeItemFromCart, isMobile} = useMain()

    return (
        <div className="cart-product-desc">
            <h3 onClick={navigate} id="cart-product-name">{product.name}</h3>
            
            <div className="cart-card-prices-mobile">
                
                <div className="prices-sale-normal-cont">
                <p className="cart-card-price">USD {product.actual_price}</p>
                {product.discount_price && <p className="cart-card-sale-price">USD {product.discount_price}</p>}
                </div>

                {product.warranty && <p className="cart-card-warranty-price">
                    + {product.warranty} Year warranty: USD {product.warranty === 1 ? "1099" : product.warranty === 2 ? "2099" : "3099"}
                </p>}
            </div>
            
            <p id="cart-sold-by">Sold by: <b>Vexus</b></p>
            <div className="cart-extras">
                <p id="cart-delivered-by">Delivered by <span>Jul 21</span></p>
                <p id="if-u-order">If you order within 18 Minutes</p>
            </div>

            <p id="cart-warranty">1 Year Warranty</p>

            {!isMobile && <WishlistAndTrash
                wishlist={wishlist}
                product={product}
                removeItemFromCart={removeItemFromCart}
                addItemToWishlist={addItemToWishlist}
                removeItemFromWishlist={removeItemFromWishlist}
            />}
        </div>
    );
}

export default CartDescription;
