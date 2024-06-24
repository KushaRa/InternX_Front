import React from 'react';
import "./Contact.css";
import MainNav from "../../components/MainNav/MainNav";
// import Footer from '../../components/Footer/footer';
import address from "../../assets/address.png";
import email from "../../assets/email.png";
import phone from "../../assets/phone.png";



export const Contact = () => {
    return (
        <div className='contact-page'>
            <MainNav />
            <section className='contact-section'>
                <div className='contact-content'>
                    <h2>Contact Us</h2>
                    <p>Get in Touch</p>
                </div>
                <div className='contact-container'>
                    <div className='contact-info'>
                        <div className='contact-box'>
                            <div className='contact-icon'><img className="address-logo " src={address} alt="Logo" /> </div>
                            <div className='contact-text'></div>
                            <h3>Address</h3>
                            <p>Dharmapala Mawatha,</p>
                            <p>Colombo 10,</p>
                            <p>Sri Lanka</p>
                        </div>
                        <div className='contact-box'>
                            <div className='contact-icon'><img className="email-logo " src={email} alt="Logo" /> </div>
                            <div className='contact-text'></div>
                            <h3>Email</h3>
                            <p>internx@gmail.com</p>
                        </div>    
                        <div className='contact-box'>
                            <div className='contact-icon'><img className="phone-logo " src={phone} alt="Logo" /> </div>
                            <div className='contact-text'></div>
                            <h3>Phone</h3>
                            <p>011-3476910</p>
                        </div>   
                    </div>
                    <div className='contact-form'>
                        <form>
                            <h2>Send Message</h2>
                            <div className='cntInput-box'>
                                <input type='text' name='' required="required"></input>
                                <span>Full Name</span>
                            </div>
                            <div className='cntInput-box'>
                                <input type='text' name='' required="required"></input>
                                <span>Email</span>
                            </div>
                            <div className='cntInput-box'>
                                <textarea required="required"></textarea>
                                <span>Type Your Message</span>
                            </div>
                            <div className='cntInput-box'>
                                <input type='submit' name='' value="send"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            
            

            {/* <Footer /> */}
        </div>
        
    )
    
}
