import React from 'react'
import { BsFillPlayCircleFill } from 'react-icons/bs'
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
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>Food Is An Important Part Of A Balanced Diet</h1>
            <p1 className="primary-text">Lorem ipsum dolor sit amet consectetur. Non tincidunt 
magna non et elit. Dolor  turpis molestie dui
magnis facilisis at fringilla quam.</p1>
<p1 className="primary-text">Non tincidunt magna non et elit. Dolor turpis molestie 
dui magnis facilisis at fringilla quam.</p1>
            <div className='about-button-container'>
              <button className='secondary-button'>learn more</button>
              <button className='watch-video-button'>{""}<BsFillPlayCircleFill/></button>
            </div>
        </div>

    </div>
  )
}

export default About