import { Outlet } from 'react-router';
import payment from '../images/payment-options.png';
import '../styles/Footer.css';

function Footer() {
  return (
    <>
     <Outlet/>
      <hr id='footer-hr'/>
      <footer className="footer">
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
      
      <hr id='footer-hr'/>
      
      <div className="copyright">
        <small>© 2011 - 2025 vexus.com, All Rights Reserved.</small>
        <small>Privacy Policy | Terms & Conditions</small>
      </div>
    </>
  );
}

export default Footer;
