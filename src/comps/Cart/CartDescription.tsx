import { useMain } from "../../states/MainStates";
import WishlistAndTrash from "./WishlistAndTrash";

function CartDescription({ product, navigate}: any) {
    const { wishlist, removeItemFromWishlist, addItemToWishlist, removeItemFromCart } = useMain()

    return (
        <div className="cart-product-desc">
            <h3 onClick={navigate} id="cart-product-name">{product.title}</h3>
            
            <div className="cart-card-prices-mobile">
                
                <div className="prices-sale-normal-cont">
                <p className="cart-card-price">USD {product.price}</p>
                {product.salePrice && <p className="cart-card-sale-price">USD {product.salePrice}</p>}
                </div>

                {product.warranty && <p className="cart-card-warranty-price">
                    + {product.warranty} Year warranty: USD {product.warranty === 1 ? "1099" : product.warranty === 2 ? "2099" : "3099"}
                </p>}
            </div>
            
            <p id="cart-sold-by">Sold by: <b>Ninja</b></p>
            <div className="cart-extras">
                <p id="cart-delivered-by">Delivered by <span>Jul 21</span></p>
                <p id="if-u-order">If you order within 18 Minutes</p>
            </div>

            <p id="cart-warranty">1 Year Warranty</p>

            <WishlistAndTrash
                wishlist={wishlist}
                product={product}
                removeItemFromCart={removeItemFromCart}
                addItemToWishlist={addItemToWishlist}
                removeItemFromWishlist={removeItemFromWishlist}
            />
        </div>
    );
}

export default CartDescription;
