import "./footer.css";
import { Link } from "react-router-dom";
import facebook from "../../assets/facebook.jpg";
import whatsapp from "../../assets/whatsapp.png";
import twitter from "../../assets/twitter.jpg";
import envelop from "../../assets/envelop.jpg";

function Footer() {
    return (<footer>
        <div class="row">
            <div class="Fcol">
            <img src="logo.jpg" class="logo"alt="" />
            <p>InternX revolutionizes the internship search process in the dynamic IT industry. Discover your perfect internship effortlessly, while IT companies find top talent seamlessly. Join InternX today and unlock boundless opportunities.</p>
        </div>
        <div class="Fcol">
            <h3>Office<div class="underline"><span></span></div></h3>
            <p>Dharmapala Mawatha</p>
            <p>Colombo 10, Sri Lanka</p>
            <p class="email-id">internx.info@gmail.com</p>
            <h4>011-3476910</h4>
        </div>
            <div class="Fcol">
                <h3>Links<div class="underline"><span></span></div></h3>
                <div className='footerUl'>
                    <p><Link to="/card">Home</Link></p>
                    <p><Link to="/internships">Internships</Link></p>
                    <p><Link to="/about">About us</Link></p>
                    <p><Link to="/contact">Contact us</Link></p>
                </div>
            </div>
            <div class="Fcol">
                <h3>Newsletter<div class="underline"><span></span></div></h3>
                <form>
                    <img className="envelop-logo" src={envelop} alt="logo"></img>
                    <input type="email" placeholder="  Enter your email" required />
                    <button type="Submit"><i class="fa-solid fa-arrow-right"></i></button>
                </form>
                <div className="social-icons">
                    <img className="facebook-logo" src={facebook} alt="logo"></img>
                    <img className="whatspp-logo" src={whatsapp} alt="logo"></img>
                    <img className="twitter-logo" src={twitter} alt="logo"></img>
                    <i className="fa-brands fa-whatsapp"></i>
                    <i className="fa-brands fa-pinterest"></i> 
                </div>
            </div>

        </div>
        <hr />
        <p class="copyright">InternX © 2024 - All Rights Reserved</p>
    </footer>
    );
}

export default Footer;