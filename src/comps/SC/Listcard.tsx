import { useNavigate } from 'react-router';
import { useMain } from '../../states/MainStates';
import type { ListcardIF } from '../../utils/interfaces/components/SC.if';
import '../../styles/PcCard.css';

function ListCard({product, title, price, src, style, route, salePrice}: ListcardIF){
   const navi = useNavigate();
   const { addItemToRv } = useMain();
  
   return ( 
    <>
    <div onClick={() => {
      if(product) addItemToRv(product);
      navi(`/product/${route}`);
      }} className={style ? style : 'list-card'}>
         
        <div className='list-card-content-wrapper'>
        <div className='main-card-content'> 
        <div className='list-card-img-cont'>
        <img loading='lazy' onClick={() => navi(`/product/${route}`)} src={src} alt={`${title} image`}/>
        </div>

        <div className='row-wrapper'>
        <div className='list-card-middle-row'>
          <h4 id='list-card-product-title' onClick={() => navi(`/product/${route}`)}>{title.slice(0, 250)}</h4>
        </div>

        <div className='list-card-last-row'>   
            <div className='list-card-price-cont'>
            <span className='list-card-price'>USD <span className='list-card-price price'>{price}</span></span>
            <span className='list-card-sale-price'>USD {salePrice ?? 10000}</span>
           </div>

          <div className='list-card-bottom-row'>
              <button onClick={() => navi(`/product/${route}`)}>View Details</button>
          </div>
        </div> 
        
        </div>
        </div>
      </div>
    </div>
    </>
  )
};

export default ListCard;