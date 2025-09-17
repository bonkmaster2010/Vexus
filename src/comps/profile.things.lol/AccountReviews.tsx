import Noti from "../SC/noti";
import { useMain } from "../../states/MainStates";
import { useNavigate } from "react-router";
import '../../styles/Review.css';
import Svg from "../../utils/extras/Svgs";

function AccountReviews(){
    // Variables
    const { accountReviews } = useMain();
    const revs = accountReviews.reverse();
    const navi = useNavigate();

    return (
    <div className="mm-my-profile-main-cont">
    <h3 className="genric-title">Reviews</h3>

    <div className="mm-info-wrapper">
    <h3 className="mm-info-header">Your reviews</h3>
    {accountReviews.length == 0 && <Noti text="You haven't made any reviews yet. "/>}


    {revs.map((r, i) => (
    <div className="account-review-card" key={`${r.review} - ${r.productTitle} - ${i}`}>
    <p className="review-card-product-name">{r.productTitle}</p>
    
    <div className="bottom-row">
    <p className="review-card-review">{r.review}</p>
    <p className="svg" onClick={() => navi(`/product/${r.productIndex}`)}>
    <Svg type="right-arrow"/>
    </p>
    </div>
    </div>
    ))}
    
    </div>
    </div>
  )
}

export default AccountReviews;