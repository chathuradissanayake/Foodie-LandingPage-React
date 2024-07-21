import React from 'react'
import AboutBackgroundImage from "../Assets/about-background-image.png"
import AboutBackground from "../Assets/about-background.png"

const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt=''/>
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage} alt=''/>
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'></p>
        </div>
    </div>
  )
}

export default About