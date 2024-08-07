import "./footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

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
                    {/* <img className="envelop-logo" src={envelop} alt="logo"></img> */}
                    <FontAwesomeIcon icon={faEnvelope} />
                    <input type="email" placeholder="  Enter your email" required />
                    <button type="Submit"><i class="fa-solid fa-arrow-right"></i></button>
                </form>
                <div className="social-icons">
                     <FontAwesomeIcon icon={faFacebook} />
                     <FontAwesomeIcon icon={faTwitter} />
                     <FontAwesomeIcon icon={faWhatsapp} />
                </div>
            </div>

        </div>
        <hr />
        <p class="copyright">InternX © 2024 - All Rights Reserved</p>
    </footer>
    );
}

export default Footer;