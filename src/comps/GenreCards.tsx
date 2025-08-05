import GenreCard from './SC/GenreCard';
import '../styles/GenreCards.css'

function GenreCards({title, images}: any){

    return(
      <>
      <div className='genre-cont'>
        <h3 style={{marginTop: '5px', marginBottom: '30px'}}>{title}</h3>
         <div className='genre-card-cont'>
          {images.map((obj: any) => (
            <GenreCard src={obj.src} route={obj.route}/>
          ))}
       </div>
     </div>
      </>    
)

}

export default GenreCards;