import { useNavigate } from 'react-router';
import type { TC } from '../../utils/interfaces/components/SC.if';
import '../../styles/GenreCards.css';
import { useFiltersWithQuery } from '../hooks/useFilterWithQuery';


function CC({title, src, route, type}: TC){
    // Variables
    const navi = useNavigate();
    const { updateFilter } = useFiltersWithQuery();

    return (
        <>
         
        <div onClick={() => {
        navi(route);
        type && updateFilter('types', type);
        }} className="cate-card">
        <img src={src} alt="category image"/>
        
        <div className='category-card-title-cont'>
        <h3>{title}</h3>
        </div>
         </div>
        </>
    )
}

export default CC;