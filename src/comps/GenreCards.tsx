import GenreCard from './SC/GenreCard';
import type { GenreCardsIF } from '../utils/interfaces/components/main.comps.if';
import '../styles/GenreCards.css'

// shows a collection of genre cards
function GenreCards({title, images}: GenreCardsIF){

    return(
      <>
      <div className='genre-cont'>
        <h3 style={{marginTop: '5px', marginBottom: '30px'}}>{title}</h3>
         <div className='genre-card-cont'>
          {images.map((obj) => (
            <GenreCard key={obj.route} type={obj.type} src={obj.src} route={`${obj.route}`}/>
          ))}
       </div>
     </div>
      </>    
)

}

export default GenreCards;