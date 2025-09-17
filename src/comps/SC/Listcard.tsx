import { useNavigate } from 'react-router';
import { useMain } from '../../states/MainStates';
import type { ListcardIF } from '../../utils/interfaces/components/SC.if';
import '../../styles/PcCard.css';

function ListCard({product, title, price, src, style, route, salePrice}: ListcardIF){
  // Variables 
  const navi = useNavigate();
  const { addItemToRv } = useMain();
  
   return ( 
    <>
    <div onClick={() => {
      if(product) addItemToRv(product);
      }} className={style ? style : 'list-card'}>
         
         {/* Main Container */}
        <div className='list-card-content-wrapper'>
        
        {/* Image things */}
        <div className='main-card-content'> 
        <div className='list-card-img-cont'>
        <img onClick={() => {
          if(product && route.trim() !== '') {
          addItemToRv(product);
          navi(`/product/${route}`)}
          }
          } src={src} alt={`${title} image`}/>
        </div>

        {/* title area */}
        <div className='row-wrapper'>
        <div className='list-card-middle-row'>
          <h4 id='list-card-product-title' onClick={() => {
            if(product) addItemToRv(product);
            navi(`/product/${route}`)}
            }>{title.slice(0, 250)}</h4>
        </div>

        {/* price area */}
        <div className='list-card-last-row'>   
            <div className='list-card-price-cont'>
            <span className='list-card-price'>USD <span className='list-card-price price'>{price}</span></span>
            <span className='list-card-sale-price'>USD {salePrice ?? 10000}</span>
           </div>
           
          {/* bottom row */}
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