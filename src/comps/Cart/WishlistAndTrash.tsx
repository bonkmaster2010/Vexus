import { useMain } from "../../states/MainStates";
import { isInWishlist } from "../../utils/fns/extra.fns";

function WishlistAndTrash({ product, isMobile = false }: any) {
    const { wishlist, removeItemFromWishlist, addItemToWishlist, removeItemFromCart,} = useMain()

    
    return (
        <div className={isMobile ? "wishlistAndTrash-mobile" : "wishlistAndTrash"}>
            {isMobile && <select className="wat-quantity-select"></select>}
            <div className="wat-btns">
                <span>
                    {isInWishlist(wishlist, product.id) ?
                        <span id="added-to-wishlist" onClick={() => removeItemFromWishlist(product.id)}>In Wishlist</span>
                        :
                        <span id="removed-from-wishlist" onClick={() => addItemToWishlist(product)}>Add To Wishlist</span>
                    }
                </span>
                <hr />
                <span id="cart-remove-product" onClick={() => {                    
                    removeItemFromCart(product, product.warranty)}}>Remove</span>
            </div>
        </div>
    );
}

export default WishlistAndTrash;
