import { useNavigate } from 'react-router';
import type { TC } from '../../utils/interfaces/components/SC.if';
import '../../styles/GenreCards.css';


function CC({title, src, route}: TC){
    
    const navi = useNavigate();

    return (
        <>
         
        <div onClick={() => navi(route)} className="cate-card">
        <img src={src} alt="category image"/>
        
        <div className='category-card-title-cont'>
        <h3>{title}</h3>
        </div>
         </div>
        </>
    )
}

export default CC;