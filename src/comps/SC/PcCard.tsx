import { useNavigate } from 'react-router';
import '../styles/PcCard.css';

export default function PcCard({title, price, src, style, route, salePrice}: any){
   const navi = useNavigate();
  return (
    <>
    <div onClick={() => navi(`/product/${route}`)} className={style}>
        <img src={src[0]} alt={`${title} image`}/>
        <hr/>

       <div className='pc-card-desc'>
        <h3>{title}</h3>
        <p className='pc-card-price'><span className='currency-name'>USD</span> {price}</p>
        {salePrice && <p className='pc-card-sale-price'>USD {salePrice}</p>}
       </div>
    </div>
    </>
  )
}