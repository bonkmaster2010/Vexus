import e1 from '../images/GCI/en_01.jpg';
import e2 from '../images/GCI/en_02.jpg';
import e3 from '../images/GCI/en_03.jpg';
import e4 from '../images/GCI/en_04.jpg';
import e5 from '../images/GCI/en_05.jpg';
import e6 from '../images/GCI/en_16.jpg';
import e7 from '../images/GCI/en_17.jpg';
import e8 from '../images/GCI/en_18.jpg';
import GenreCard from './GenreCard';


function GenreCards(){

    return(
     <div className='genre-card-cont'>
        <GenreCard src={e1}/>
        <GenreCard src={e2}/>
        <GenreCard src={e3}/>
        <GenreCard src={e4}/>
        <GenreCard src={e5}/>
        <GenreCard src={e6}/>
        <GenreCard src={e7}/>
        <GenreCard src={e8}/>
     </div>
    )

}

export default GenreCards;