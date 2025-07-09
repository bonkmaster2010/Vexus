import '../styles/PcCard.css';

export default function PcCard({title, price, src, style}: any){

  return (
    <>
    <div className={style}>
        <img src={src} alt={`${title} image`}/>
        <hr/>
        <h3>{title}</h3>
        <p>{price}</p>
    </div>
    </>
  )
}