import { useEffect, useState } from "react"
import { useNavigate } from "react-router";
import { useMain } from "../../states/MainStates";

function Checkout(){
    const [fullPrice, setFullPrice] = useState(0)
    const [showCuponInput, setShowCuponInput] = useState(true);
    const [cuponInput, setCuponInput] = useState('');
    const cart = useMain(s => s.cart);
    const navi = useNavigate();
    
    useEffect(() => {
    const totalPrice = cart.reduce((total, item) => {
        const itemTotal = item.price * item.quantity;
        return total + itemTotal;
    }, 0);

      setFullPrice(totalPrice);
    }, [cart]);

    return (
    <div className="checkout-cont">
      <div className="checkout-content-wrapper">
          
          <div className="checkout-total-wrapper">
          <p id="checkout-total-label">Total</p>
          <p id="checkout-total-price">USD <b>{fullPrice}</b></p>
          </div>

          <div className="cupon-cont">

            <div className="tci-cont">
            <button onClick={() => setShowCuponInput(!showCuponInput)} >
                {showCuponInput ? "▾" : "▸"}
            </button>
            <p>Enter a gift card or a promotional code!</p>
            </div>

            <div className={`cupon-input-cont ${showCuponInput ? "show" : ""}`}>
            <input onChange={(e) => setCuponInput(e.target.value)} value={cuponInput} className="cupon-input" />
            <button>Apply</button>
            </div>
          </div>
           
          <hr id="secure-checkout-hr"/>

           <div className="secure-checkout-cont">
           <button onClick={() => navi('/')} id="continue-shopping"><span> Continue shopping </span></button>
           <button className="secure-checkout-btn">Secure Checkout</button>
           </div>

           <div className="secure-checkout-cont-mobile">
            <button className="secure-checkout-btn">Secure Checkout</button>
           </div>

      </div>
    </div>
    )
}

export default Checkout;