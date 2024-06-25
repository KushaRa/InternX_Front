import React from 'react';
import "./Contact.css";
import MainNav from "../../components/MainNav/MainNav";
import Footer from '../../components/Footer/footer';
import address from "../../assets/address.jpg";
import email from "../../assets/email.jpg";
import phone from "../../assets/phone.jpg";



export const Contact = () => {
    return (
        // <div className='contact-page'>
            
            <div className='contact-container'>
                <MainNav />
                <h1 className='contact-h1'>Contact Us</h1>
                <div className='contat-content'>
                    <div className='contacct-info'>
                        <h2 className='contact-h2'>Get in Touch</h2>
                        <p><img className="address-logo " src={address} alt="Logo" />Address:Dharmapala Mawatha</p>
                        <p className='contact-p'>Colombo 10, Sri Lanka</p>
                        <p><img className="email-logo " src={email} alt="Logo" />Email: internx@gmail.com</p>
                        <p><img className="phone-logo " src={phone} alt="Logo" />Phone: 011-3476910</p>
                    </div>
                    <div className='contact-form'>
                        <div className='cInput-group'>
                    <input className="input1" type="text" placeholder="Name" />
                    <input className="input1" type="email" placeholder="Email" />
                        </div>
                    <textarea className='contact-msg' placeholder="Message"></textarea>
                    <button type="submit">Send</button>   
                    </div>
                </div>
            </div>

                
            

             
        // </div>
        
    )
   
}
export default Contact;
<Footer /> 