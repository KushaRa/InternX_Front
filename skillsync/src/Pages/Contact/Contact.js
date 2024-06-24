import React from 'react';
import "./Contact.css";
import MainNav from "../../components/MainNav/MainNav";
// import Footer from '../../components/Footer/footer';
// import address from "../../assets/address.png";
// import email from "../../assets/email.png";
// import phone from "../../assets/phone.png";



export const Contact = () => {
    return (
        // <div className='contact-page'>
            
            <div className='contact-container'>
                <MainNav />
                <h1>Contact Us</h1>
                <div className='contat-content'>
                    <div className='contacct-info'>
                        <h2>Get in Touch</h2>
                        <p>Address:Dharmapala Mawatha</p>
                        <p>Colombo 10, Sri Lanka</p>
                        <p>Email: internx@gmail.com</p>
                        <p>Phone: 011-3476910</p>
                    </div>
                    <div className='contact-form'>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>   
                    </div>
                </div>
            </div>

                
            

            // {/* <Footer /> */}
        // </div>
        
    )
    
}
export default Contact;