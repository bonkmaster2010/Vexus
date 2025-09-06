import payment from '../images/payment-options.png';
import { useNavigate } from 'react-router';
import { useMain } from '../states/MainStates';
import '../styles/Footer.css';
import { slugify } from '../utils/fns/extra.fns';

function Footer() {
  const navi = useNavigate();
  const { rv } = useMain();
   
  return (
    <>
      <footer className="footer">
         
         {rv.length > 0 && <div className='main-rv-cont'>
           
          <div className='rv-top-row'>
          <h3>RECENTLY VIEWED ITEMS</h3>
          <p onClick={() =>{
            navi('/all-rv-products')}}>View All</p>
          </div>

         <div className='rv-cont'>

          {rv.map((product) => {           
          return( 
          <div key={product.link} onClick={() => navi(`/product/${slugify(product.name)}`)} className='rv-card'>
          <img src={product.image} alt={`${product.name} image`}/>
          </div>)
}          )}
         </div>
         </div>}


        <div className="about-us">
          <h3>About Us</h3>
          <p>
            Welcome to Vexus — your ultimate destination for high-performance PC builds, parts, and accessories, Home Items, etc.
            Whether you're a gamer, creator, or professional, our curated marketplace helps you build with clarity and confidence.
          </p>
        </div>

        <div className="quick-links-section">
          <h3 id="quick-links-header">Quick Links</h3>
          <div className="quick-links">
            <a href="#">Contact</a>
            <a href="#">Careers</a>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Return Policy</a>
            <a href="#">Shipping Info</a>
            <a href="#">FAQs</a>
            <a href="#">Affiliate Program</a>
            <a href="#">Support Center</a>
            <a href="#">Partnerships</a>
          </div>
        </div>

        <div className='footer-bottom-row'>
          <img src={payment}/>
        <div className="socials">
          <p>Follow us on social media (coming soon)</p>
        </div>
        </div>

      </footer>
      
      <div className="copyright">
      <div className='footer-hr-bottom'/>

        <small>© 2011 - 2025 vexus.com, All Rights Reserved.</small>
        <small>Privacy Policy | Terms & Conditions</small>
      </div>
    </>
  );
}

export default Footer;
