import Noti from "../SC/noti";
import WishlistCard from "./WishlistCard";
import { useMain } from "../../states/MainStates";
import { useParams } from "react-router";
import { getPageItems } from "../../utils/fns/extra.fns";
import type { CartProduct } from "../../utils/interfaces/components/SC.if";
import '../../styles/Wishlist.css';

function Wishlist(){
  const { wishlist } = useMain();
  const { page } = useParams<{ page: string }>(); 
  const currentPage = parseInt(page || "1", 10);
  const pageSize = 5;
  
  const pageItems = getPageItems(wishlist, currentPage, pageSize);

   return (
    <>
    <div className="main-wishlist-cont">
    
    <h3 className="genric-title">My Wishlist</h3>
    <div className="small-hr"/>

     <div className="wishlist-content-wrapper">
            {pageItems.length == 0 && <Noti text="Your wishlist is empty. Add some products to your wishlist by clicking the heart button in product page. "/>}
            {pageItems.length > 0 &&  <div className="cart">
                    {pageItems.map((product: CartProduct, i: number) => (
                        <WishlistCard
                            key={product.id}
                            product={product}
                            index={i}
                        />
                    ))}
                </div>}
      </div>
    </div>
    </>
   )
}

export default Wishlist;