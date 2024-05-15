import "./footer.css";

function Footer() {
    return (<footer>
        <div class="row">
            <div class="col">
            <img src="logo.jpg" class="logo"alt="" />
            <p>InternX revolutionizes the internship search process in the dynamic IT industry. Discover your perfect internship effortlessly, while IT companies find top talent seamlessly. Join InternX today and unlock boundless opportunities.</p>
        </div>
        <div class="col">
            <h3>Office<div class="underline"><span></span></div></h3>
            <p>Dharmapala Mawatha</p>
            <p>Colombo 10, Sri Lanka</p>
            <p class="email-id">internx@gmail.com</p>
            <h4>011-3476910</h4>
        </div>
            <div class="col">
                <h3>Links<div class="underline"><span></span></div></h3>
                <ul>
                    <li><a href= "">Home</a></li>
                    <li><a href= "">Services</a></li>    
                    <li><a href= "">About Us</a></li>
                    <li><a href= "">Features</a></li>
                     <li><a href= "">Contacts</a></li>    
                </ul>
            </div>
            <div class="col">
                <h3>Newsletter<div class="underline"><span></span></div></h3>
                <form>
                    <i class="fa-regular fa-envelope"></i>
                    <input type="email" placeholder="  Enter your email" required />
                    <button type="  Submit"><i class="fa-solid fa-arrow-right"></i></button>
                </form>
                <div class="social-icons">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-whatsapp"></i>
                    <i class="fa-brands fa-pinterest"></i>
                </div>
            </div>

        </div>    
        <hr />
        <p class="copyright">InternX © 2024 - All Rights Reserved</p>
    </footer>);
}

export default Footer;