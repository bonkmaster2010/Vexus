



function GenreCard({src, title}: any){

    return(
    <div className="genre-card" style={{background: `url(${src})`}}>
       <h3>{title}</h3>
    </div>
    )

}

export default GenreCard;