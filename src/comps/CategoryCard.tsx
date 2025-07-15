import { useNavigate } from 'react-router';
import '../styles/GenreCards.css';

interface TC{
    title: string,
    src: string;
    route: string
}

function CC({title, src, route}: TC){
    
    const navi = useNavigate();

    return (
        <>
        
        <div onClick={() => navi(`/${route}`)} className="cate-card">
        <img src={src} alt="category image"/>
        
        <div className='category-card-title-cont'>
        <h3>{title}</h3>
        </div>
         </div>
        </>
    )
}

export default CC;