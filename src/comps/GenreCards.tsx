import GenreCard from './SC/GenreCard';
import '../styles/GenreCards.css';

function GenreCards({title, images}: any){

    return(
        <>
      <div className='genre-cont'>
        <h3 style={{marginTop: '5px', marginBottom: '8px'}}>{title}</h3>
         <div className='genre-card-cont'>
          {images.map((img: any) => (
            <GenreCard src={img}/>
          ))}
       </div>
     </div>
      </>    
)

}

export default GenreCards;