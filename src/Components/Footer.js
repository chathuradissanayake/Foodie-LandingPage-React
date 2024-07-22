import React from 'react';
import { BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';


const Footer = () => {
  return (
    <div className='footer-wrpper'>
        <div className='footer-section-one'>
            <div className='footer-logo-container'>
                <img src='Logo' alt=''/>
            </div>
            <div className='footer-icons'>
                <BsTwitter/>
                <FaFacebookF/>
                <BsYoutube/>
                <SiLinkedin/>
            </div>
        </div>
        <div className='footer-section-two'>
            <div className='footer-section-columns'>
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Careers</span>
                <span>Testimonial</span>
                <span>Work</span>
            </div>
            <div className='footer-section-columns'>
                <span>+94773084850</span>
                <span>chathura@foodie.com</span>
                <span>helloworld@foodie.com</span>
                <span>press@foodie.com</span>
                <span>contact@foodie.com</span>
            </div>
            <div className='footer-section-columns'>
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
            </div>
        </div>

    </div>
  )
}

export default Footer