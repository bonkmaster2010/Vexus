import { useMain } from "../../states/MainStates";
import { allProducts } from "../../utils/extras/Data";
import { useNavigate } from "react-router";
import CartCard from "./CartCard";
import Checkout from "./Cart.checkout";
import Noti from "../SC/noti";
import Section from "../SC/Section";
import '../../styles/Cart.css';


function Cart() {
    const { cart, removeItemFromCart, wishlist, addItemToWishlist, removeItemFromWishlist} = useMain();
    const navi = useNavigate();

    return (
        <div className="main-cart-cont">
           <div className="cart-content-wrapper">
            <h2 className="left-mark-title" style={{marginBottom: "25px"}}>Your shopping cart</h2>

            {cart.length === 0 && <Noti text="Your shopping cart is empty. Add some products to your cart by clicking the ‘Add to Cart‘ button next to the product you like."/>}
            {cart.length > 0 &&  <div className="cart">
                    {cart.map((product, i: number) => (
                        <CartCard
                            key={product.id}
                            product={product}
                            index={i}
                            navigate={navi}
                            wishlist={wishlist}
                            removeItemFromCart={removeItemFromCart}
                            addItemToWishlist={addItemToWishlist}
                            removeItemFromWishlist={removeItemFromWishlist}
                        />
                    ))}
                </div>}
            {cart.length > 0 && <Checkout/>}

            <hr style={{width: "100%", opacity: "0.5"}}/>

            <h2 className="left-mark-title">Recommended For You</h2>
            <Section title="" arr={allProducts} CartType={true}/>
            </div>
        </div>
    );
}

export default Cart;
