import { useNavigate } from 'react-router';
import { useMain } from '../../states/MainStates';
import type { PCard } from '../../utils/interfaces/components/SC.if';
import '../../styles/PcCard.css';

function PCardComp({product, title, price, src, style, route, salePrice, CartType}: PCard){
  const navi = useNavigate();
  const { addItemToCart, addItemToRv } = useMain()
  
  return (
    <>
    <div onClick={() => {
      if(product) addItemToRv(product);
      navi(`/product/${route}`);
      }} className={style ? style : 'pc-card'}>
        <div className='pc-card-img-cont'>
        <img src={src} alt={`${title} image`}/>
        </div>
       <div className='pc-card-desc'>
        <h3>{title}</h3>
        
        <div className='pc-card-bottom-row'>
          
        <p className='pc-card-price'><span className='currency-name'>USD</span> {price}</p>
        {salePrice && <p className='pc-card-sale-price'>USD {parseInt(salePrice.replace(/[₹,]/g, ''))} </p>}
        </div>

     {CartType === true && <button onClick={(e) =>{ 
        e.stopPropagation();
        {product && addItemToCart(product, 1, 1)};
          }} className='add-to-cart-btn'>Add To Cart</button>}
       </div>
    </div>
    </>
  )
};

export default PCardComp;