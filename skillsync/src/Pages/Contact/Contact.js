import React, { useRef } from "react";
import "./Contact.css";
import MainNav from "../../components/MainNav/MainNav";
import Footer from "../../components/Footer/footer";
import address from "../../assets/address.jpg";
import email from "../../assets/email.jpg";
import phone from "../../assets/phone.jpg";
import emailjs from "@emailjs/browser";
const apiKey = process.env.REACT_APP_EMAILJS_API_KEY;


export const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

  const templateParams = {
    user_name: nameRef.current.value,
    user_email: emailRef.current.value,
    message: messageRef.current.value,
   };

   if (!apiKey) {
    console.error('EmailJS API key is not defined.');
    return;
  }

  // console.log('Sending email with params:', templateParams);
  // console.log('Using API Key:', apiKey);

   emailjs
      .send(
        "service_vyb0ww4",
        "template_lp1roh3",
        templateParams,
        // "lXtWrN83VcO2t54Is"
        apiKey
      )
      .then(
        (result) => {
          console.log("Message Sent!", result.text);
          alert("Message Sent!");
        },
        (error) => {
          console.log("Failed...", error.text);
          alert("Failed to send message, please try again later.");
        }
      );
  };
  return (
    <>
      {/* <div className='contact-page'> */}
      <div className="contact-container">
        <MainNav />
        <h1 className="contact-h1">Contact Us</h1>
        <div className="contat-content">
          {/* <div className='contact-info'>  */}

          <h2 className="contact-h2">Get in Touch</h2>
          <p className="contact-p">
            <img className="address-logo " src={address} alt="Logo" />
            Address:Dharmapala Mawatha
          </p>
          <p className="contact-p">Colombo 10, Sri Lanka</p>
          <p className="contact-p">
            <img className="email-logo " src={email} alt="Logo" />
            Email: internx@gmail.com
          </p>
          <p className="contact-p">
            <img className="phone-logo " src={phone} alt="Logo" />
            Phone: 011-3476910
          </p>
          {/* <div className='c-para'>
                            <p>InternX revolutionizes the internship search process in the dynamic IT industry.
                                Discover your perfect internship effortlessly, while IT companies find top talent seamlessly.
                                Join InternX today and unlock boundless opportunities.</p>
                        </div>  */}
        </div>
        <div className="contact-form">
          <div className="cInput-group">
            <input
              ref={nameRef}
              className="input1"
              type="text"
              placeholder="Name"
              name="user_name"
              required
            />
            <input
              ref={emailRef}
              className="input1"
              type="email"
              placeholder="Email"
              name="user_email"
              required
            />
          </div>
          <textarea
            ref={messageRef}
            className="contact-msg"
            placeholder="Message"
            name="message"
            required
          ></textarea>
          <button type="button" onClick={sendEmail}>
            Send
          </button>
        </div>
      </div>
       <Footer /> 
    </>
  );
};
export default Contact;
