import CartImage from "./CartImage";
import CartDescription from "./CartDescription";
import CartPrice from "./CartPrice";
import WishlistAndTrash from "./WishlistAndTrash";
import { useMain } from "../../states/MainStates";

function CartCard({ product, index, navigate}: any) {
    
    const { wishlist, isMobile } = useMain()

    return (
        <div className="cart-card">
            <div className="main-card-content">
                <CartImage src={product.src[0]} alt={product.title} navigate={() => navigate(`/product/${index}`)} />
                <CartDescription 
                    product={product} 
                    navigate={() => navigate(`/product/${index}`)} 
                    wishlist={wishlist}
                />
                <CartPrice product={product}/>
            </div>

            {isMobile && <div className="wat-hr"/>}

            {isMobile && <WishlistAndTrash
                wishlist={wishlist}
                product={product}
            />}
        </div>
    );
}

export default CartCard;
