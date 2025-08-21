import { useMain } from "../../states/MainStates";
import { isInWishlist } from "../../utils/fns/extra.fns";
import '../../styles/Cart.css';

function WishlistAndTrash({ product }: any) {
    const { wishlist, removeItemFromWishlist, addItemToWishlist, removeItemFromCart, updateQuantity, isMobile} = useMain()
    const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>, id: string, warranty: number) => {
        updateQuantity(id, warranty, Number(e.target.value));
    };

    return (
      <div className="wishlistAndTrash">
        
               {isMobile && <div className="price-cont-quantity-select">
                <select value={product.quantity > 10 ? 10 : product.quantity} onChange={(e) => handleQuantityChange(e, product.id, product.warranty)}>
                    {quantities.map((op) => (
                        <option key={op} value={op}>
                            {op}
                        </option>
                    ))}
                </select>
            </div>}

            <div className="wat-btns">
                <span>
                    {isInWishlist(wishlist, product) ?
                        <span id="added-to-wishlist" onClick={() => removeItemFromWishlist(product)}>In Wishlist</span>
                        :
                        <span id="removed-from-wishlist" onClick={() => addItemToWishlist(product)}>Add To Wishlist</span>
                    }
                </span>
                 <hr className="cart-card-mobile-hr" />
                <span id="cart-remove-product" onClick={() => {                    
                    removeItemFromCart(product, product.warranty)}}>Remove</span>
            </div>
        </div>
    );
}

export default WishlistAndTrash;
