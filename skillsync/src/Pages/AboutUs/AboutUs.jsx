import React from 'react'
import './AboutUs.css'
import member1 from '../../assets/Ravindu.png'
import member3 from '../../assets/Lakshika.png'
import member2 from '../../assets/Nethmini.png'
import member4 from '../../assets/Kushana.jpg'
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import MainNav from "../../components/MainNav/MainNav";

const AboutUs = () => {
  return (
    <div className="about">
      
      <div className="intro">
      <div><MainNav/></div>
       <div className='vissioMission'>
        <div className='Mission'><h3>Our Mission </h3>
        <p>
        At InternX, our mission is to empower IT students by providing a seamless, 
        user-friendly platform where they can find and secure valuable internship opportunities. 
        We strive to bridge the gap between aspiring professionals and leading companies, 
        fostering growth, learning, and 
        career development.
        </p>
      </div>
      <div className='Vission'>
        <h3>Our Vission </h3>
        <p>
        Our vision is to become the leading internship platform 
        in the IT industry, recognized globally for transforming 
        the way students and companies connect. We aim to create 
        a world where every IT student has access to impactful internship 
        experiences that pave the way for successful careers.
        </p>
        </div>
        </div>

        <div className='whyUs'>
          <h3>Why Choose InternX</h3> 
          <p> Our platform offers a seamless experience,
             designed to be user-friendly, making it easy for both students and companies to connect. 
             We provide comprehensive listings with a wide range of internship opportunities in the IT industry. 
             As a trusted platform, we prioritize security and transparency to ensure a trustworthy experience for all users. 
             Join us today and be a part of InternX to unlock boundless opportunities for your future career.
              Whether you’re an IT student looking for 
             internships 
             or a company seeking talented interns, 
             InternX is here to help you every step of the way.
             </p>
        </div>

      
   
        
      </div>
      <div className="paraz">
        <div className="firstPara">
          <div className="firstPara"></div>
          <h3 className="topic">Meet Our Team</h3>
          <div className="team">
            <div className="cardA">
              <img src={member1} alt="" />
              <p>Ravindu Lakshitha</p>
              <div className="social-media">
                <BsLinkedin />
                <MdOutlineMail />
              </div>
            </div>
            <div className="cardA">
              <img src={member4} alt="" />
              <p>Kushana Senadheera </p>
              <div className="social-media">
                <BsLinkedin />
                <MdOutlineMail />
              </div>
            </div>
            <div className="cardA">
              <img src={member3} alt="" />
              <p>Lakshika Bandara</p>
              <div className="social-media">
                <BsLinkedin />
                <MdOutlineMail />
              </div>
            </div>
            <div className="cardA">
              <img src={member2} alt="" />
              <p>Nethmini Sandunika</p>
              <div className="social-media">
                <BsLinkedin />

                <MdOutlineMail />
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}

export default AboutUs;