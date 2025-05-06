import React from 'react'
import './HeroSection.css'
import dp from "../../assets/dp.jpg"
import WebCanvas from '../React Three Fiber/WebCanvas'
import Lottie from 'lottie-react'
import ScrollDown from "../../assets/ScrollDown.json"
import AnimatedText from '../AnimatedText/AnimatedText'
import Copy from '../Copy/Copy'
export default function HeroSection() {
  return (
    <div id='hero-section-main'> 
      <div className='hero-section'>
        <div className="layer1">
          <Copy>
          <h1>Muhammad Saad</h1>
          </Copy>
          <div className='layer1-bottom'>
            <div className='layer1-animation-div'>
            <Lottie animationData={ScrollDown} loop={true} className='scroll-animation'/>
            <h2>Scroll To Work</h2>
            </div>
            <div className='layer1-bottom-content'>
              <img src={dp} alt="" />
              <div className='layer1-bottom-content-inner'>
                <h2><AnimatedText text={"Creative Developer"}/></h2>
              </div>
            </div>
          </div>
        </div>
        <div className="layer2">
          <WebCanvas />
        </div>
        <div className="layer3">
          <Copy>
          <h1>Muhammad Saad</h1>
          </Copy>
        </div>
      </div>
    </div>
  )
}
