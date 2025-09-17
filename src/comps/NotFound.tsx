import nf from '../images/404pageImgMicroless.webp';
import { useNavigate } from "react-router"
import '../styles/NotFound.css';


function NotFound(){
  // Variables
    const navi = useNavigate();

    return (
        <div className="not-found-alt">
        
        <div className='nf-content-wrapper'>

        <img className='nf-img-m' src={nf} alt="not found icon"/>

        <div className="not-found-text-cont">
            <h1>404</h1>
            <p className="nf-main-text">Page not found</p>
            <p className="nf-small-text">We can’t seem to find the page you’re looking for. </p>
            <button className="nf-btn" onClick={() => navi("/")}>Back To Home</button>
        </div>

        <img className='nf-img' src={nf} alt="not found icon"/>
        </div>

        </div>

    )
}

export default NotFound;