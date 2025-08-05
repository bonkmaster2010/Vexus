import { useMain } from "../../states/MainStates";
import type { CartProduct } from "../../utils/interfaces/state-interfaces/MainState.interfaces";

function CartPrice({ product }: { product: CartProduct}) {
    const { updateQuantity } = useMain();
    const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>, id: string, warranty: number) => {
        updateQuantity(id, warranty, Number(e.target.value));
    };

    
    return (
        <div className="cart-card-price-cont">
            <div className="cart-card-prices">
                <p className="cart-card-price">USD {product.price}</p>
                {product.salePrice && (
                    <p className="cart-card-sale-price">USD {product.salePrice}</p>
                )}
                {product.warranty > 0 && (
                    <p className="cart-card-warranty-price">
                        + {product.warranty} Year warranty: USD{" "}
                        {product.warranty === 1 ? "1099" : product.warranty === 2 ? "2099" : "3099"}
                    </p>
                )}
            </div>

            <div className="price-cont-quantity-select">
                <span>Quantity</span>
                <select value={product.quantity > 10 ? 10 : product.quantity} onChange={(e) => handleQuantityChange(e, product.id, product.warranty)}>
                    {quantities.map((op) => (
                        <option key={op} value={op}>
                            {op}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}


export default CartPrice;
