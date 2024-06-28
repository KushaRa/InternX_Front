import React, { useRef } from 'react';
import "./Contact.css";
import MainNav from "../../components/MainNav/MainNav";
import Footer from '../../components/Footer/footer';
import address from "../../assets/address.jpg";
import email from "../../assets/email.jpg";
import phone from "../../assets/phone.jpg";
import emailjs from '@emailjs/browser';




export const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vyb0ww4', 'template_lp1roh3', form.current,'lXtWrN83VcO2t54Is',
      )
      .then(
        (result) => {
          console.log('Message Sent!',result.text);
          alert('Message Sent!');
        },
        (error) => {
          console.log('Failed...', error.text);
          alert('Failed to send message, please try again later.');
        },
      );
  };
    return (
        <>
   
         {/* <div className='contact-page'> */}
            
            <div className='contact-container'>
                <MainNav />
                <h1 className='contact-h1'>Contact Us</h1>
                <div className='contat-content'>

                     {/* <div className='contact-info'>  */}

                        <h2 className='contact-h2'>Get in Touch</h2>
                        <p className='contact-p'><img className="address-logo " src={address} alt="Logo" />Address:Dharmapala Mawatha</p>
                        <p className='contact-p'>Colombo 10, Sri Lanka</p>
                        <p className='contact-p'><img className="email-logo " src={email} alt="Logo" />Email: internx@gmail.com</p>
                        <p className='contact-p'><img className="phone-logo " src={phone} alt="Logo" />Phone: 011-3476910</p>

                         {/* <div className='c-para'>
                            <p>InternX revolutionizes the internship search process in the dynamic IT industry. 
                                Discover your perfect internship effortlessly, while IT companies find top talent seamlessly. 
                                Join InternX today and unlock boundless opportunities.</p>
                        </div>  */}

                    </div>
                     {/* <form ref={form} onSubmit={sendEmail} className='contact-form'>  */}
                    <div ref={form} className='contact-form'> 
                        <div className='cInput-group'>
                    <input className="input1" type="text" placeholder="Name" name='user_name' />
                    <input className="input1" type="email" placeholder="Email" name='user_email'/>
                        </div>
                    <textarea className='contact-msg' placeholder="Message" name='message'></textarea>
                    <button type="button" onClick={sendEmail}>Send</button>   
                
                      </div>  
                </div>
             {/* </div> */}
                
            

{/*              
            </div> */}
            </>
        
    );
   
}
export default Contact;
<Footer /> 